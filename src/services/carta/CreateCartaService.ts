import prismaClient from "../../prisma";

interface CartaRequest{
    descricao: string;
    img_carta: string;
    poder_ataque: number;
    poder_defesa: number;
}

class CreateCartaService{
    async execute({ descricao, img_carta, poder_ataque, poder_defesa }: CartaRequest){
        
        if(descricao === '' || img_carta === '' || poder_ataque === null || poder_defesa === null){
            throw new Error("Dados invalidos");
        }

        const carta = await prismaClient.carta.create({
            data:{
                descricao: descricao,
                img_carta: img_carta,
                poder_ataque: poder_ataque,
                poder_defesa: poder_defesa
            },
            select:{
                id: true,
                descricao: true,
                img_carta: true,
                poder_ataque: true,
                poder_defesa: true
            }
        })

        return carta;

    }
}

export { CreateCartaService }
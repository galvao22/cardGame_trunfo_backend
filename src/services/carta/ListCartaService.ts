import prismaClient from "../../prisma";

class ListCartaService{
    async execute(){

        const carta = await prismaClient.carta.findMany({
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

export { ListCartaService }
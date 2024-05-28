import prismaClient from "../../prisma";

class ListDeckCartaService{
    async execute(variavel_randomica: string){

        const carta = await prismaClient.$queryRawUnsafe(
            `SELECT id, descricao, img_carta, poder_ataque, poder_defesa FROM carta ORDER BY RANDOM() LIMIT ${variavel_randomica};`
        )

        return carta;

    }
}

export { ListDeckCartaService }
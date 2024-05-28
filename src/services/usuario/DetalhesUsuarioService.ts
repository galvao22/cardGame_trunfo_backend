import prismaClient from "../../prisma";

class DetalhesUsuarioService{
    async execute(user_id: string){
        
        const usuario = await prismaClient.usuario.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                login: true
            }
        })

        return usuario;

    }
}

export { DetalhesUsuarioService }
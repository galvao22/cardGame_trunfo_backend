import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UsuarioRequest{
    login: string;
    senha: string;
}

class CreateUsuarioService{
    async execute({ login, senha }: UsuarioRequest){

        if(!login){
            throw new Error("Login incorreto")
        }

        const usuarioAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                login: login
            }
        })

        if(usuarioAlreadyExists){
            throw new Error("Login ja existe");
        }

        const passwordHash = await hash(senha, 8);

        const usuario = await prismaClient.usuario.create({
            data:{
                login: login,
                senha: passwordHash
            },
            select:{
                id: true,
                login: true
            }
        })

        return usuario;
    }
}

export { CreateUsuarioService }

//parei na aula 68
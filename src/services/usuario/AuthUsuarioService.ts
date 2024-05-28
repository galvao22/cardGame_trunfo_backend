import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest{
    login: string;
    senha: string;
}

class AuthUsuarioService{
    async execute({ login, senha }: AuthRequest){

        const usuarioAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                login: login
            }
        })

        if(!usuarioAlreadyExists){
            throw new Error("Usuario/senha incorretos");
        }

        const passwordMatch = await compare(senha, usuarioAlreadyExists.senha);

        if(!passwordMatch){
            throw new Error("Usuario/senha incorretos");
        }

        const token = sign(
            {
                login: usuarioAlreadyExists.login
            },
            process.env.JWT_SECRET,
            {
                subject: usuarioAlreadyExists.id,
                expiresIn:'7d'
            }
        )

        return {
            id: usuarioAlreadyExists.id,
            login: login,
            token: token
        }

    }
}

export { AuthUsuarioService }
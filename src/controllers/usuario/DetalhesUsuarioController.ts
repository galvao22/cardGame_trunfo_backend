import { Request, Response } from "express";
import { DetalhesUsuarioService } from "../../services/usuario/DetalhesUsuarioService";

class DetalhesUsuarioController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        const detalhesUsuarioService = new DetalhesUsuarioService();

        const usuario = await detalhesUsuarioService.execute(user_id);

        return res.json(usuario);
    }
}

export { DetalhesUsuarioController }
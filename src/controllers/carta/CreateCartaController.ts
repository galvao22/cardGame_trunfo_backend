import { Request, Response } from "express";
import { CreateCartaService } from "../../services/carta/CreateCartaService";

class CreateCartaController{
    async handle(req: Request, res: Response){

        const{ descricao, img_carta, poder_ataque, poder_defesa } = req.body;

        const createCartaService = new CreateCartaService();

        const carta =  await createCartaService.execute({
            descricao,
            img_carta,
            poder_ataque,
            poder_defesa
        });

        return res.json(carta);

    }
}

export { CreateCartaController }
import { Request, Response } from "express";
import { ListDeckCartaService } from "../../services/carta/ListDeckCartaService"; 

class ListDeckCartaController{
    async handle(req: Request, res: Response){
        
        const variavel_randomica = req.params['variavel'];

        const listDeckCartaService = new ListDeckCartaService();

        const carta = await listDeckCartaService.execute(variavel_randomica);

        return res.json(carta);

    }
}

export { ListDeckCartaController }
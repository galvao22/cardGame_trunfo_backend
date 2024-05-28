import { Request, Response } from "express";
import { ListCartaService } from "../../services/carta/ListCartaService";

class ListCartaController{
    async handle(req: Request, res: Response){
        
        const listCartaService = new ListCartaService();

        const carta = await listCartaService.execute();

        return res.json(carta);

    }
}

export { ListCartaController }
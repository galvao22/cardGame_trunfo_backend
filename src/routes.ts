import { Router, Request, Response } from "express";

import { CreateUsuarioController } from "./controllers/usuario/CreateUsuarioController";
import { AuthUsuarioController } from "./controllers/usuario/AuthUsuarioController";
import { DetalhesUsuarioController } from "./controllers/usuario/DetalhesUsuarioController";

import { CreateCartaController } from "./controllers/carta/CreateCartaController";
import { ListCartaController } from "./controllers/carta/ListCartaController";
import { ListDeckCartaController } from "./controllers/carta/ListDeckCartaController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//rota raiz
router.get('/', (req: Request, res: Response) => {
    return res.json({status: true});
})


//rota usuario
router.post('/usuario', new CreateUsuarioController().handle);
router.post('/login', new AuthUsuarioController().handle);
router.get('/usuario_info', isAuthenticated, new DetalhesUsuarioController().handle);

//rota carta
router.post('/carta', isAuthenticated, new CreateCartaController().handle);
router.get('/listar_cartas', isAuthenticated, new ListCartaController().handle);
router.get('/listar_deck/:variavel', isAuthenticated, new ListDeckCartaController().handle);

export { router };
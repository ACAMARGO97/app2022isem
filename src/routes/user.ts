import { Request, Response, Application } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

export class UsuarioRoutes {
    public usuarioController: UsuarioController = new UsuarioController();
    public routes(app: Application): void {
        app.route('/usuarios').get(this.usuarioController.getAllUsuario)
        app.route('/usuario').get(this.usuarioController.getOneUsuario)
        app.route('/usuario').get(this.usuarioController.createUsuario)
        app.route('/usuario').get(this.usuarioController.updateUsuario)
        app.route('/usuario').get(this.usuarioController.deleteUsuario)
    }
}
const {Router} = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

/*function myMiddleware(request, response, next){
  next()
}
*/
const usersController = new UsersController(); //a constante usersController é uma instância do UsersController

userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);

/* para eu expor as rotas. exporto para quem quiser usar o arquivo, poder usar*/
module.exports = userRoutes;

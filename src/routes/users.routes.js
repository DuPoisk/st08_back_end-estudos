const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();

const usersController = new UsersController(); //a constante usersController é uma instância do UsersController

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);

/* para eu expor as rotas. exporto para quem quiser usar o arquivo, poder usar*/
module.exports = userRoutes;

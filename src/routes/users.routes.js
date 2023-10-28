const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController(); //a constante usersController é uma instância do UsersController

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update); // uso o put quando quero atualizar propriedades de um determinado registro, com mais de um campo no banco de dados
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => { // aula st10-2.4- uso o patch para atualizar um campo ESPECÍFICO 
  console.log(request.file.filename);
  response.json();
}),

/* para eu expor as rotas. exporto para quem quiser usar o arquivo, poder usar*/
module.exports = userRoutes;

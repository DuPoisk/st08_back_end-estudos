const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController(); //a constante notesController é uma instância do NotesController

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show); /* essa linha faz com que a rota seja visível*/
notesRoutes.delete("/:id", notesController.delete); /* essa linha faz com que a rota de deletar seja visível*/

/* para eu expor as rotas. exporto para quem quiser usar o arquivo, poder usar*/
module.exports = notesRoutes;

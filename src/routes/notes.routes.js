const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController(); //a constante notesController é uma instância do NotesController

notesRoutes.post("/:user_id", notesController.create);
//notesRoutes.get("/id", notesController.show);

/* para eu expor as rotas. exporto para quem quiser usar o arquivo, poder usar*/
module.exports = notesRoutes;

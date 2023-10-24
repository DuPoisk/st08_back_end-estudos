const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

const tagsController = new TagsController(); 

tagsRoutes.get("/:user_id", tagsController.index);

/* para eu expor as rotas. exporto para quem quiser usar o arquivo, poder usar*/
module.exports = tagsRoutes;

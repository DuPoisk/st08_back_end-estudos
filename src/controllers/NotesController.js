const knex = require("../database/knex"); // importando o knex, acessando o index

class NotesController{
 async create(request, response){ // async create recebe uma requisição e uma resposta
  const { title, description, tags, links } = request.body; // estou desestruturando essas coisas dentro dos {} e pegando a requisição do Body.
  const {user_id} = request.params;

  const [note_id] = await knex("notes").insert({ // na tabela notes, insiro o título, descrição, id do usuário    
    title, 
    description,
    user_id
  });// colocar colchetes em volta do not_id, para devolver o id dentro de um array na primeira posição


  //PARA LINKS
  const linksInsert = links.map(link => { // percorro cada item que tenho e para cada link, retorna id das notas e mudo de link para url
    return {
      note_id,
      url: link
    }
  });

  await knex("links").insert(linksInsert); // insiro na tabela links o linksInsert

  //PARA TAGS
  const tagsInsert = tags.map(name => { // percorro cada tag  que tenho e pego name,  retorna id das notas , nome dela e id do usuário
    return {
      note_id,
      name,
      user_id
    }
  });

  await knex("tags").insert(tagsInsert); // insiro na tabela tags o tagsInsert

  response.json();
 }
}

module.exports = NotesController;
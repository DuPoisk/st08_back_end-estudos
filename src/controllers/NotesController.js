const knex = require("../database/knex"); // importando o knex, acessando o index

class NotesController{
 async create(request, response){ // async create recebe uma requisição e uma resposta
  const { title, description, tags, links } = request.body; // estou desestruturando essas coisas dentro dos {} e pegando a requisição do Body LÁ DO INSOMNIA.
  const {user_id} = request.params; /* PEGO O ID DO USUÁRIO QUE ESTÁ APARECENDO NO LINK */

  //CADASTRANDO NOTAS
  const [note_id] = await knex("notes").insert({ // na tabela notes, insiro o título, descrição, id do usuário    
    title, 
    description,
    user_id
  });// colocar colchetes em volta do not_id, para devolver o id dentro de um array na primeira posição


  //PARA inserir  LINKS
  const linksInsert = links.map(link => { // percorro cada item que tenho e para cada link, retorna id das notas e mudo de link para url
    return {
      note_id,
      url: link /*muda de link para URL. Estou criando um novo objeto aqui */
    }
  });

  await knex("links").insert(linksInsert); // insiro na tabela links o linksInsert

  //PARA inserir TAGS
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

 // PARA MOSTRAR/ EXIBIR AS NOTAS
 async show(request, response) {
  const { id } = request.params;

  const note = await knex("notes").where({ id }).first(); /* seleciono a nota utilizando o knex buscando notas baseadas no id 
  (uso o id como parâmetro), e como não quero todas, mas apenas uma, uso o .first() */
  const tags = await knex ("tags").where({note_id: id}).orderBy("name");
  const links = await knex("links").where({note_id: id}).orderBy("created_at");

  return response.json({ /*resposta em forma de objeto */
    ...note, /*despejando todos os detalhes das notas */
    tags,
    links
  });
 }

 // PARA DELETAR 
 async delete (request, response){
  const { id } = request.params;

  await knex("notes").where({id}).delete();

  return response.json();
 }

 //PARA LISTAR AS NOTAS
 async index(request, response) {
  const { user_id} = request.query;
  const notes = await knex("notes").where({user_id}).orderBy("title");

  return response.json(notes);
 }
}

module.exports = NotesController;
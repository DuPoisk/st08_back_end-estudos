
exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id");
  table.integer("url").references("id").inTable("users"); // aqui estou criando um campo do tipo inteiro na minha tabela, 
  //chamado "user_id" e ele faz uma referência ao "id" que existe dentro da tabela "users". 
  //Logo só posso criar uma nota se eu tiver um usuário para vinculá-la.

  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // significa que se eu deletar a nota a qual a tag estiver vinculada,
  // automaticamente vai deletar os links. Ou seja, deleta os links que estão vinculados à nota, em cascata.

  table.timestamp("created_at").default(knex.fn.now());
}); //up cria a tabela


exports.down = knex => knex.schema.dropTable("links");//down deleta a tabela


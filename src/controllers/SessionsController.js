const knex = require("../database/knex");
const AppError = require("../utils/AppError");


class SessionsController {
  async create(request, response){ //assíncrona, pois envolve conexão com banco de dados. crio aqui uma sessão para o usuário.
    const {email, password} = request.body;

    const user = await knex("users").where({email}).first(); // na tabela users, quero filtrar o usuário pelo emmail. first() serve para garantir que devolva somente UM.
    
    if(!user) { // "se usuário nao existir"
      throw new AppError("Senha e/ ou e-mail in, 401"); // o erro 401 significa não autorizado
    }

    
    return response.json({user});
  }
}

module.exports = SessionsController;
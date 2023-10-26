class SessionsController {
  async create(request, response){ //assíncrona, pois envolve conexão com banco de dados. crio aqui uma sessão para o usuário.
    const {email, password} = request.body;
    return response.json({email, password});
  }
}

module.exports = SessionsController;
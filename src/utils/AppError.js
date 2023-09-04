

class AppError {
  message; /* são variáveis*/
  statusCode;

  constructor(message, statusCode = 400){ /* coloquei a mensagem 400 como padrão*/
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
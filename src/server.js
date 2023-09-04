require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");
const express = require("express");

const routes = require("./routes") /* quando não especifico a rota, ele puxa automaticamente o index, ou seja, é a mesma coisa que require("./routes/index.js")*/

migrationsRun();

const app = express();
app.use(express.json()); // diz qual o formato que quero que mostre o resultado da minha requisção

app.use(routes); /* AS ROTAS ESTÃO AQUI!*/


app.use((error, request, response, next) => { /* verificando se é erro do cliente*/
  if (error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  return response.status(500).json({ /* verificando se é erro do servidor*/
    status: "error",
    message: "Internal server error",
  });
});

const PORT = 3333; // endereço
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // fique escutando na porta PORT e quando ela iniciar, vai soltar uma msg dizendo qual é essa porta



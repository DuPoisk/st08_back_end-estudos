const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

describe("UserCreateService", () => {
  it ("user should be create", async () => { // it recebe 2 parâmetros: 1=descrição do teste,com a expectativa de resultado; 2=função que vai executar de fato  o teste
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123"
    }; // exemplo de dados eviados de uma requisição pelo usuário
  
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const userCreateService = new UserCreateService(userRepositoryInMemory);
    const userCreated = await userCreateService.execute(user);
  
    //console.log(userCreated);
  
    expect(userCreated).toHaveProperty("id");
  }); 
})


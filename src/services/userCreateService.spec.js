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

  it("another test", () => {
    expect(1).toBe(1);
  });
})

describe("NotesCreateService", () => {
  it("create notes", async () => {
    expect(1).toBe(1);
  })
})


// aqui é um exemplo de 2 describes com seus devidos testes. O ideia é ter 1 describe por arquivo, apenas. 
  // teste colocar expect(1).toBe(2); na llinha 28 ou na linha 22 para ver como o erro é acusado no terminal.

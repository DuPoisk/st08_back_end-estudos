const UserCreateService = require("./UserCreateService");

it ("user should be creat", () => { // it recebe 2 parâmetros: 1=descrição do teste,com a expectativa de resultado; 2=função que vai executar de fato  o teste
  const user = {
    name: "User Test",
    email: "user@test.com",
    password: "123"
  }; // exemplo de dados eviados de uma requisição pelo usuário

  const  userCreateService = new UserCreateService();
  const userCreated = await userCreateService.execute(user);

  expect(userCreated).toHaveProperty("id");


}); 
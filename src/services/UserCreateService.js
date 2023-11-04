const {hash, compare} = require("bcryptjs"); // para a criptografia
const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository){ // construtor é da classe, por isso fica avaixo dela, e não dentro de outra função
    this.userRepository = userRepository; // com o "this." deixo disponível globalmente
  }
 
  async execute({name, email, password}){     
    const checkUSerExists = await this.userRepository.findByEmail(email); // coloco o async acima, para o await daqui ficar disponível para mim
  
    if (checkUSerExists){
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8); // os dois parameros dentro dos parenteses são: tipo de dado, e fator de complexidade

    await this.userRepository.create({name, email, password: hashedPassword});

  }
}

module.exports = UserCreateService;
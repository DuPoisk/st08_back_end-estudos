class UserRepositoryInMemory{
  users = [];

  async create({email, name, password}) {
    const user = {
      id: Math.flood(Math.random() * 1000) + 1, // para gerar números aleatórios
      email, 
      name,
      password
    };

    this.users.push(user);

    return user;
  }

  async findByMail(email) {
    return this.users.find(user => user.email === email);
  }
}

module.exports = UserRepositoryInMemory;
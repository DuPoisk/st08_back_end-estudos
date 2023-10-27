const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class DiskStorage {
  //FUNÇÃO PARA MUDAR ARQUIVO(IMAGEM) DE LUGAR, SALVANDO O ARQUIVO
  async saveFile(file) {
    await fs.promises.rename( // o rename vai ser para mudar o arquivo de lugar, colocando-o da pasta temporária para a de upload
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  //FUNÇÃO PARA DELETAR O ARQUIVO(IMAGEM)
  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

    //try e catch para tratamento de exceções, necessário para a manipulaçã ode arquivos desse tipo na aplicação
    try { 
      await fs.promises.stat(filePath);
    } catch { // caso algo de errado
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorage;
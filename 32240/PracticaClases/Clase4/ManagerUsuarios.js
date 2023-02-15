const fs = require('fs').promises;

class ManagerUsuarios {
  async crearUsuario(usuario) {
    try {
      let usuarios = [];
      const data = await fs.readFile('Usuarios.json');
      usuarios = JSON.parse(data);
      usuarios.push(usuario);
      await fs.writeFile('Usuarios.json', JSON.stringify(usuarios));
      console.log('Usuario creado');
    } catch (error) {
      console.error(error);
    }
  }

  async consultarUsuarios() {
    try {
      const data = await fs.readFile('Usuarios.json');
      const usuarios = JSON.parse(data);
      return usuarios;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ManagerUsuarios;
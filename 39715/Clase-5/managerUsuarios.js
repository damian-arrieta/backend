import fs from 'fs';

const path = './usuarios.json';

export default class ManagerUsuarios {
    consultarUsuarios = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            const result = JSON.parse(data);
            console.log(result);
        } else {
            return [];
        }
    }

    crearUsuario = async (usuario) => {
        const usuarios = await this.consultarUsuarios();
        if (usuarios.length === 0) {
            usuario.id = 1;
        } else {
            usuario.id = usuarios[usuarios.length - 1].id + 1;
        }
        usuarios.push(usuario);
        await fs.promises.writeFile(path, JSON.stringify(usuarios, null, '/t'));
        return usuario;
    }
}
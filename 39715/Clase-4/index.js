import ManagerUsuarios from './managerUsuarios.js';

const manager = new ManagerUsuarios();

const env = async () => {
    let consulta1 = await manager.consultarUsuarios();
    console.log(consulta1);

    const usuario = {
        nombre: 'Damian',
        apellido: 'Arrieta',
        edad: 28,
        curso: 'Backend'
    }

    let result = await manager.crearUsuario(usuario);
    console.log(result);
}

env();
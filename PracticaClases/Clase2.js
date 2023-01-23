const productos = [
    {manzanas: 2,
    bananas: 3,
    duraznos: 1,
    naranjas: 5,
},
    {manzanas: 3,
    bananas: 5,
    duraznos: 1,
    naranjas: 2
}]

let obtenerValores = Object.entries(productos);
console.log(obtenerValores);

let obtener = Object.values(productos);
console.log(obtener);

let suma = obtener.reduce((valor, valor1) => valor + valor1);
console.log(suma);

class TicketManager {
    constructor() {
      this.eventos = [];
      this._precioBaseDeGanancia = 0.15;
      this._idAutoincrementable = 0;
    }
  
    getEventos() {
      return this.eventos;
    }
  
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
      const id = this._idAutoincrementable++;
      const evento = {
        id,
        nombre,
        lugar,
        precio: precio + (precio * this._precioBaseDeGanancia),
        capacidad,
        fecha,
        participantes: []
      };
      this.eventos.push(evento);
    }
  
    agregarUsuario(idEvento, idUsuario) {
      const evento = this.eventos.find(e => e.id === idEvento);
      if (!evento) {
        console.log("El evento no existe");
        return;
      }
      if (evento.participantes.includes(idUsuario)) {
        console.log("El usuario ya está registrado en este evento");
        return;
      }
      evento.participantes.push(idUsuario);
    }
  
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
      const evento = this.eventos.find(e => e.id === idEvento);
      if (!evento) {
        console.log("El evento no existe");
        return;
      }
      const nuevoEvento = {
        ...evento,
        id: this._idAutoincrementable++,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: []
      };
      this.eventos.push(nuevoEvento);
    }
  }
  
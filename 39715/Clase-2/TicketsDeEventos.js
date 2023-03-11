/*Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío

*La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.

*Debe contar con el método “getEventos” El cual mostrará los eventos guardados.

*Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)

*El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

*Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)

*Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha

*El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)*/
class TicketManager {

    #priceProfitBase;

    constructor () {
        this.events = [];
        this.#priceProfitBase = 0.15
    }

    getEvents = () => {
        console.log(this.events);
        return
    }

    addEvent = (name, place, price, capacity, date) => {
        const event = {
            id: this.events.length +1,
            name,
            place,
            price: price + this.#priceProfitBase,
            capacity: capacity ?? 50,
            date: date ?? new Date(),
            participants: []
        }
        this.events.push(event);
    }

    addUser = (eventId, userId) => {
        const eventIndex = this.events.findIndex((event) => event.id === eventId);

        if (eventIndex === -1) {
            console.log("No existe el evento");
            return;
        }

        const userExist = this.events[eventIndex].participants.includes(userId);

        if(userExist) {
            console.log("El usuario ya está registrado");
            return;
        }

        this.events[eventIndex].participants.push(userExist);
    }

    putEventOnTour = (eventId, newPlace, newDate) => {
        const event = this.events.find((event) => event.id === eventId);

        if(!event) {
            console.log('El evento no existe');
            return;
        }

        const newEvent = {
            ...event,
            id: this.events.length + 1,
            place: newPlace,
            date: newDate,
            participants: []
        };
        this.events.push(newEvent);
    }
}

const ticketManager = new TicketManager();
ticketManager.addEvent('Damián', 'Santa Rosa', 10, 1);
ticketManager.addEvent('Luis', 'Buenos Aires', 2);
ticketManager.addEvent('Santiago', 'Santiago', 7, 15);
ticketManager.putEventOnTour(3, 'Lima', '2023-05-15T20:52:02.472Z');
ticketManager.putEventOnTour(5, 'Brasilia', '2023-03-15T20:52:02.472Z');
ticketManager.getEvents();

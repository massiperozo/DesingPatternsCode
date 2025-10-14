//El patron de diseño Proxy es un patron estructural que proporciona un sustituto o representacion
//de otro objeto para controlar el acceso a este. El proxy actua como un intermediario entre
//el cliente y el objeto real, permitiendo realizar operaciones adicionales antes o depsues 
//de acceder al objetos real. Este patron es util en situaciones donde se requiere un control
//adicional sobre el acceso a un objeto, como en la carga diferida, la seguridad o el registro
//de operaciones.
//El proxy se compone de los siguientes elementos clave:
//1. Subject: es la interfaz o clase abstracta que define los metodos que tanto el proxy
//como el objeto real deben de implementar. Esto permite que el cliente interactue con el
//proxy de la misma manera que lo haria con el objeto real.
//2. RealSubject: es la implementacion concreta de la interfaz Subject. Este es el objeto
//real al que el proxy representa. El RealSubject contiene la logica de negocio y las
//operaciones que el cliente desea realizar
//3. Proxy: es la implementacion concreta de la interfaz Subject que actua como un
//intermediario entre el cliente y el ReealSubject. El proxy contiene una referencia
//al RealSubject y controla el acceso a este. El proxy puede realizar operaciones
//al RealObject antes o despues de delegar las llamadas del cliente al objeto real.
//4. Cliente: es el codigo que utiliza el proxy para interactuar con el objeto real.
//El cliente solicita operaciones al proxy, que a su vez las delega al RealSubject
//segun sea necesario.

//Empezamos con la interfaz SUbject, que define los metodos que tanto el proxy como
//el objeto real deben de implementar. Esto permite uqe el cliente interactue con 
//el proxy de la misma manera que lo haria con el objeto real.
interface Subject {
    request(): void;
}

//Luego con RealSubject, que es la implementacion concreta de la interfaz Subject.
//Este es el objeto real al que el proxy representa. El RealSubject contiene la
//logica de negocio y las operaciones que el cliente desea realizar.
class RealSubject implements Subject {
    request(): void {
        console.log("RealSubject: Manejo de la solicitud.");
    }
}

//Luego con Proxy, que es la implementacion concreta de la interfaz Subject que actua
//como un intermediario entre el cliente y el RealSubject. El proxy contiene una
//referencia al RealSubject y controla el acceso a este. El proxy puede realizar
//operaciones al RealObject antes o despues de delegar las llamadas del cliente
//al objeto real.
class Proxyy implements Subject {
    private realSubject: RealSubject | null = null;

    request(): void {
        //Lazy initialization: este es crear el RealSubject solo cuando es necesario
        if (!this.realSubject) {
            this.realSubject = new RealSubject();
        }

        //Agrega la logica adicional como el control de acceso, el registro o la
        //carga diferida antes o despues de delegar la llamada al RealSubject
        console.log("Proxy: Control de acceso antes de la solicitud.");
        this.realSubject.request();
        console.log("Proxy: Registro despues de la solicitud.");
    }
}

//Finalmente con el Cliente, que es el codigo que utiliza el proxy para interactuar
//con el objeto real. El cliente solicita operaciones al proxy, que a su vez las
//delega al RealSubject segun sea necesario.
function cliente(subject: Subject) {
    subject.request();
}

//Ejemplo de uso
console.log("Cliente: Solicitud de un objeto RealSubject a traves del Proxy:");
const proxy = new Proxyy();
cliente(proxy);

console.log("Cliente: usando proxy nuevamente:");
cliente(proxy);
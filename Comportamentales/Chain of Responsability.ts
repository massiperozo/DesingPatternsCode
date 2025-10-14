//El patron de diseño Chain of Responsabilidad (Cadena de Responsabilidad) es un patron
//comportamental que permite pasar una solicitud a lo largo de una cadena de manejadores
//hasta que uno de ellos la maneje. Este patron es util cuando se tiene una serie de
//objetos que puedan manejar una solicitud, pero no se sabe de antemano cual lo hara.
//Cada manejador en la cadena tiene la oportunidad de procesar la solicitud o pasarla
//al siguiente manejador en la cadena.

//Para empezar, creamos la interfaz Handler que define el metodo para manejar la solicitud
//y un metodo para establecer el siguiente manejador en la cadea.
interface Handler{
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

//Luego, creamo la clase base abstracta para los manejadores concretos. Esta clase implementa 
//el metodo setNext y proporciona una implementacion por defecto para el metodo handle.
abstract class HandlerAbstracto implements Handler{
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler; //Permite encadenar llamadas
    }

    handle(request: string): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(request);
        }
        return null; //Si no hay siguiente manejador, retorna null
    }
    
}

//Despues creamos los manejadores concretos que extiendan la clase base e implementen
//la lagica especifica para manejar ciertas solicitudes.
class ManejadorConcretoA extends HandlerAbstracto{
    handle(request: string): string | null {
        if(request === "A"){
            return `ManejadorConcretoA maneja la solicitud ${request}`;
        }
        return super.handle(request);//Pasa al siguiente manejador
    }
}

class ManejadorConcretoB extends HandlerAbstracto{
    handle(request: string): string | null {
        if(request === "B"){
            return `ManejadorConcretoB maneja la solicitud ${request}`;
        }
        return super.handle(request);//Pasa al siguiente manejador
    }

}

class ManejadorConcretoC extends HandlerAbstracto{
    handle(request: string): string | null {
        if(request === "C"){
            return `ManejadorConcretoC maneja la solicitud ${request}`;
        }
        return super.handle(request);//Pasa al siguiente manejador
    }
}

//Finalmente, se crea el codigo del cliente que configura la cadena de manejadores.
//Este utiliza la cadena para procesar las solicitudes.
function clientee(handler: Handler){
    const solicitudes = ["A", "B", "C", "D"];
    for (const solicitud of solicitudes){
        console.log(`Cliente: ¿Quien puede manejar la solicitud ${solicitud}?`);
        const resultado = handler.handle(solicitud);
        if(resultado){
            console.log(`  ${resultado}`);
        }
        else{
            console.log(`  ${solicitud} no fue manejada.`);
        }
    }
}

//Ejemplo de uso
const manejadorA = new ManejadorConcretoA();
const manejadorB = new ManejadorConcretoB();    
const manejadorC = new ManejadorConcretoC();

//Establecemos la cadena: A -> B -> C
manejadorA.setNext(manejadorB).setNext(manejadorC);
console.log("Cadena: A->B->C\n");
//El cliente solo interactura con el primer manejador de la cadena
clientee(manejadorA);
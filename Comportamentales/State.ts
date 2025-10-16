//El patron de diseño State (Estado) permite a un objeto cambiar su comportamiendo 
//cuando su estado interno cambia. El objeto parecerá cambiar de clase.
//Este patron es util cuando un objeto debe cambiar su comportamiento en tiempo de ejecucion
//segun su estado interno, evitando el uso de multiples condicionales.

//Para empezar se crea una interfaz que define los metodos que cada estado debe
//implementar.
interface Estado{
    handle(contexto: Contexto):void;
}

//Luego se crea una clase Contexto (Context) este mantiene una instancia de una subclase
//de estado concretro que define el estado actual.
class Contexto{
    private estado:Estado;

    constructor(estado:Estado){
        this.estado = estado;
    }

    //Metodo para cambiar de estado
    setEstado(estado:Estado):void{
        this.estado = estado;
    }

    //Metodo que delega la solicitud al estado actual
    request():void{
            this.estado.handle(this); 
    }
}

//Ahora despues de esto se crea las dintians instancias de estado que implementan un comportamineto
//asociado a un estado del Contexto.
class EstadoConcretoA implements Estado{
    handle(contexto: Contexto): void {
        console.log("EstadoConcreetoA: Manejo de la solicitud cambiando a EstadoConcretoB");
        contexto.setEstado(new EstadoConcretoB());
    }
}

class EstadoConcretoB implements Estado{
    handle(contexto: Contexto): void {
        console.log("EstadoConcretoB: Manejando la solicitud. Cambiando a EstadoConcretoA");
        contexto.setEstado(new EstadoConcretoA)
    }
}

//Finalmente hacemos el codigo del cliente que crea un contexto con un estado inicial 
//realiza solicutdess
function cliente (){
    //Estado inicial: EstadoConcretoA
    const contexto = new Contexto(new EstadoConcretoA);

    //Realiza solicitudes que cambian el estado
    contexto.request()//EstadoConcretoA maneja y cambia a B
    contexto.request//EstadoConcretoB maneja y cambia a A
    contexto.request()//EstadoConcretoA maneja y cambia B
}

cliente();
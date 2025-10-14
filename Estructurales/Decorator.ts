//El patron de diseño Decorator (Decorador) es un patron estructural que permite 
//agregar funcionalidad adicional a un objeto de manera dinamica, sin alterar su 
//estructura original. Este patron es util cuando se desea extender el comportamiento
//de un objeto sin modificar su codigo fuente, siguiendo el principio de abierto/cerrado
//Este proporciona una alternativa flexbible a la herencia para extender la funcionalidad.

//Empezamos creando una interfaz que define el comportamiento comun para los componentes
//y los decoradores
interface Componente{
    operacion():string;
}

//Luego creamos el componente concreto, este implementa la interfaz Componente y define el 
//comportamiento base
class ComponenteConcreto implements Componente{
    operacion(): string{
        return `Operacion del componente concreto`;
    }
        
}

//Y luego creamos la clase abstracta Decorador, esta implementa la interfaz Componente y tiene
//una referencia a un objeto Componente. El decorador delega las llamadas al componente
//y puede agregar funcionalidad adicional antes o despues de delegar la llamada
abstract class Decorador implements Componente{
    protected componente: Componente;

    constructor(componente: Componente){
        this.componente = componente
    }

    //Delega la operacion al compoenete envuelto
    operacion(): string{
        return this.componente.operacion();
    }
    
}

//Ahora una vez creada la clase abstracta del Decoradoer, podemos crear decoradores
//concretos que extienden la funcionalidad del componente.
class DecoradorConcretoA extends Decorador{
    operacion(): string {
        //llama la ooperacion del componente base y agrega funcionalidad adicional
        return `Decorador A(${super.operacion()})`;
    }
}

class DecoradorConcretoB extends Decorador{
    operacion(): string {
        //Llama la operacion del componente
        return `Decorador B(${super.operacion()})`;
    
    }
}

//Finalmetne se crea el codigo del cleinte el cual usa los componentes y decoradores de manera transparente
function cliente(c: Componente){
    console.log(`RESULTADO: ${c.operacion()}`);
}

//Ejemplo uso
const simple = new ComponenteConcreto();
console.log("Cliente: Tengo un componente simple:");
cliente(simple);

const decorador1 = new DecoradorConcretoA(simple);
console.log("Cliente: Componente con el decorador A:")
cliente(decorador1);
const decorador2 = new DecoradorConcretoB(decorador1);
console.log("Cliente: Componente con el decorador A y B:");
cliente(decorador2);
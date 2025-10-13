//El patron de diseño Bridge (Puente) es un patron de diseño estructural que utilizado para 
//desacoplar una abstraccion de su implementacion, permitiendo que ambas puedan variar
//independientemente. El patron Bridge es util cuando se desea evitar una explosion de
//clases debido a la combinacion de diferentes abstracciones y sus implementaciones.
//El patron Bridge se compone de dos jerarquias separadas: la jerarquia de la abstraccion
//y la jerarquia de la implementacion. La abstraccion define la interfaz que el cliente
//utiliza, mientras que la implementacion define los detalles de bajo nivel. La abstraccion
//mantiene una referencia a un objeto de la implementacion, lo que permite que la 
//abstraccion delegue las operaciones a la implementacion.

//Empezamos creando la interfaz de la Implementacion (Implementation) que define los
//metdos para las clases de implementacion
interface Implementor {
    operacionImplementor(): string;
}

//Luego creamos las clases concretas de implementacion que implementan la interfaz
//de la implementacion 

class ImplementacionConcretaA implements Implementor{
    operacionImplementor(): string {
        return "Implementacion concreta A";
    }
}

class ImplementacionConcretaB implements Implementor{
    operacionImplementor(): string {
        return "Implementacion concreeta B";
    }
}

//Despues de esto se crea la clase abstracta Abstraccion (Abstraction) que define la interfaz
//que el cliente utiliza y mantiene una referencia a un objeto de la implementacion

abstract class Abstraccion {
    protected implementor: Implementor;

    constructor(implementor: Implementor){
        this.implementor = implementor;
    }

    //Metodo abstracto que delega la operacion a la implementacion
    abstract operacion (): string;
}

//Despues se crean las clases concretas de la abstraccion que extiendenn la clase
//abstraccion y proporcionan implementaciones especificas del metodo operacion

class AbstraccionConcretaA extends Abstraccion{
    operacion(): string {
        //Delega la operacion de implementacion
        const result = this.implementor.operacionImplementor;
        return `Abstraccion refinada ${result}`;
    }
}

class AbstraccionConcretaB extends Abstraccion{
    operacion(): string {
        //Delega la operacion de implementacion
        const result = this.implementor.operacionImplementor();
        return `Abstraccion refinada ${result}`;
    }
}

//Finalmente el codigo del cliente usa la abstraccion sin conocer los detalles de implementacion
function cliente(abstraccion: Abstraccion){
    console.log(abstraccion.operacion());
}

//Ejemplo de uso 
const ImplementorA = new ImplementacionConcretaA();
const ImplementorB = new ImplementacionConcretaB();

const abstraccionA = new AbstraccionConcretaA(ImplementorA);
const abstraccionB = new AbstraccionConcretaA(ImplementorB);

cliente(abstraccionA);
cliente(abstraccionB);
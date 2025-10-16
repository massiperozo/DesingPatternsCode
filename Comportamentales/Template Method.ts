//El patron de diseño Template Method es un patron comportamental que define el esqueleto
//de un algoritmo en una operacion, diferiendo algunos pasos a las subclases.
//El patron Template Method permite que las subclases redefinan ciertos pasos de un algoritmo
//sin cambiar la estructura del algoritmos.
//Este patron es util cuando se tiene un algoritmo que se repita en varias clases
//pero algunos pasos del algoritmoo pueden variar.

//Para empezar se crea una clase abstracta que define el esqueleto del algoritmo
//y los pasos que pueden ser redefinidos por las subclases.
abstract class AbstractClass{
    //Metodo template que define el esqueleto del algoritmo
    templateMethod(): void{
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }
    //Pasos del algoritmo que pueden ser redefinidos por las subclases
    protected abstract stepOne(): void;
    protected abstract stepTwo(): void;
    protected abstract stepThree(): void;
}

//Luego se crean las clases concretas que implementan los pasos del algoritmo
class ConcreteClassA extends AbstractClass{
    protected stepOne(): void{
        console.log("ConcreteClassA: Paso Uno");
    }
    protected stepTwo(): void{
        console.log("ConcreteClassA: Paso Dos");
    }
    protected stepThree(): void{
        console.log("ConcreteClassA: Paso Tres");
    }
}

class ConcreteClassB extends AbstractClass{
    protected stepOne(): void{
        console.log("ConcreteClassB: Paso Uno");
    }
    protected stepTwo(): void{
        console.log("ConcreteClassB: Paso Dos");
    }
    protected stepThree(): void{
        console.log("ConcreteClassB: Paso Tres");
    }
}

//Finalmente se crea la clase cliente que utiliza las clases concretas
function cliente(){
    console.log("Cliente: Ejecutando el algoritmo con ConcreteClassA");
    const concreteA = new ConcreteClassA();
    concreteA.templateMethod();

    console.log("Cliente: Ejecutando el algoritmo con ConcreteClassB");
    const concreteB = new ConcreteClassB();
    concreteB.templateMethod();
}

//Ejemplo de uso
cliente();
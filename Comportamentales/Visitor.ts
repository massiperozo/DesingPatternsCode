//El patron de diseño Visitor (Visitante) es un patron comportamental que permite
//separar un algoritmo de la estructura de objetos sobre la que espera operar.
//El patron Visitor permite agregar nuevas operaciones a una estructura de objetos
//sin modificar las clases de los objetos.
//Este patron es util cuando se tiene una estructura de objetos compleja y se quieren
//agregar nuevas operaciones sin cambiar las clases de los objetos.

//Para empezar se crea una interfaz Visitor que define los metodos que cada visitante
//debe implementar.
interface Visitante{
    visitConcreteElementA(element: ElementoConcretoA): void;
    visitConcreteElementB(element: ElementoConcretoB): void;
}

//Luego se crean las clases concretas que implementan la interfaz Visitor
class ConcreteVisitorA implements Visitante{
    visitConcreteElementA(element: ElementoConcretoA): void{
        // Implementacion del metodo para el elemento A
    }
    visitConcreteElementB(element: ElementoConcretoB): void{
        // Implementacion del metodo para el elemento B
    }
}

class ConcreteVisitorB implements Visitante{
    visitConcreteElementA(element: ElementoConcretoA): void{
        // Implementacion del metodo para el elemento A
    }
    visitConcreteElementB(element: ElementoConcretoB): void{
        // Implementacion del metodo para el elemento B
    }
}

//Luego se crea la interfaz Element que define el metodo accept que acepta un visitante
interface Elemento{
    accept(visitor: Visitante): void;
}
//Luego se crean las clases concretas que implementan la interfaz Element
class ElementoConcretoA implements Elemento{
    accept(visitor: Visitante): void{
        visitor.visitConcreteElementA(this);
    }
    //Metodo especifico de ConcreteElementA
    operationA(): void{
        console.log("ConcreteElementA: Operacion A");
    }
}
class ElementoConcretoB implements Elemento{
    accept(visitor: Visitante): void{
        visitor.visitConcreteElementB(this);
    }
    //Metodo especifico de ElementoConcretoB
    operationB(): void{
        console.log("ConcreteElementB: Operacion B");
    }
}
//Luego se crea la clase ObjectStructure que mantiene una coleccion de elementos
//y es el encargado de iterar sobre los elementos y aceptar a los visitantes.
class ObjectStructure{
    private elements: Elemento[] = [];
    //Metodo para agregar elementos a la coleccion
    addElement(element: Elemento): void{
        this.elements.push(element);
    }
    //Metodo para aceptar a un visitante y aplicar la operacion a todos los elementos
    accept(visitor: Visitante): void{
        for(const element of this.elements){
            element.accept(visitor);
        }
    }
}
//Finalmente se crea la clase cliente que utiliza la estructura de objetos y los visitantes
function cliente(){
    //Crear la estructura de objetos y agregar elementos
    const objectStructure = new ObjectStructure();
    objectStructure.addElement(new ElementoConcretoA());
    objectStructure.addElement(new ElementoConcretoB());
    //Crear los visitantes
    const visitorA = new ConcreteVisitorA();
    const visitorB = new ConcreteVisitorB();
    //Aplicar el visitante A a la estructura de objetos
    console.log("Cliente: Aplicando Visitor A");
    objectStructure.accept(visitorA);
    //Aplicar el visitante B a la estructura de objetos
    console.log("Cliente: Aplicando Visitor B");
    objectStructure.accept(visitorB);
}
//Ejemplo de uso
cliente();
//El patron de diseño Iterator (Iteraador) es un patron comportamental que proporciona
//una forma de acceder secuencialmente a los elementos de una coleccion sin exponer su
//representacion interna. Este patron es especialmente util cuando se trabaja con 
//colecciones complejas o estructura de datos que pueden tener diferentes formas de 
//almacenamiento, como las listas enlazadas, arboles o grafos.

//El patron Iterator se compone de varios componentes clave:
//1. Iterator (Iterador): Es una interfaz o clase abstracta que define los metodos
//para recorrer los elementos de la coleccion, como next(), hasNext()  y current().
//2. ConcreteIterator (Iterador Concreto): Es una implementacion concreta de la
//interfaz Iterator. Mantiene el estado actual de la iteracion y proporciona la 
//logica para recorrer los elementos de la coleccion.
//3. Aggregate (Agregado): Es una interfaz o clase abstracta que define un metodo
//para crear un iterador, como createIterator().
//4. ConcreteAggregate (Agregado Concreto): Es una implementacion concreta de la
//interfaz Aggregate. Contiene la coleccion de elementos y proporciona el metodo
//para crear un iterador que pueda recorrer esos elementos.

//Empezamos definiendo la interfaz Iterator, esta interfaz define los metodos
//necesarios para recorrer la coleccion.
interface Iterador<T> {
    hasNext(): boolean; // Indica si hay mas elementos para recorrer
    next(): T// Devuelve el siguiente elemento o null si no hay mas elementos
}

//Despues de esto, creamos la interfaz Aggregate, que define el metodo
//para crear un iterador.
interface Aggregate<T> {
    createIterator(): Iterador<T>; // Crea y devuelve un iterador para la coleccion
}

//Luego, implementamos la clase ConcreteIterator, que es una
//implementacion concreta de la interfaz Iterator. Esta clase mantiene
//el estado actual de la iteracion y proporciona la logica para
//recorrer los elementos de la coleccion.
class ConcreteIterator<T> implements Iterador<T> {
    private collection: T[]; // Coleccion de elementos a iterar
    private currentIndex: number = 0; // Indice actual de la iteracion

    constructor(coleccition: T[]) {
        this.collection = coleccition;
    }

    //Verifica si hay mas elementos para recorrer
    hasNext(): boolean {
        return this.currentIndex < this.collection.length;
    }

    //Devuelve el siguiente elemento o null si no hay mas elementos
    next(): T {
        if (!this.hasNext()) {
            throw new Error("No hay mas elementos");
        }   
        return this.collection[this.currentIndex++];
    }     
}

//A continuacion, implementamos la clase ConcreteAggregate, que representa
//una coleccion concreta de elementos. Esta clase implementa la interfaz
//Aggregate y proporciona el metodo para crear un iterador.
class ConcreteAggregate<T> implements Aggregate<T> {
    private items: T[] = []; // Array para almacenar los elementos de la coleccion
    // Metodo para agregar un elemento a la coleccion
    public addItem(item: T): void {
        this.items.push(item);
    }

    //Crea y devuelve un iterador para la coleccion
    createIterator(): Iterador<T> {
        return new ConcreteIterator<T>(this.items);
    }

}

//Finlmente, creamos el codgi del cliente que utiliza el patron Iterator
function clientCode<T>(aggregate: Aggregate<T>): void {
    const iterator = aggregate.createIterator();
    while (iterator.hasNext()) {
        console.log(iterator.next());
    }
}

// Ejemplo de uso:
const aggregate = new ConcreteAggregate<string>();
aggregate.addItem("Elemento 1");
aggregate.addItem("Elemento 2");
aggregate.addItem("Elemento 3");

clientCode(aggregate);
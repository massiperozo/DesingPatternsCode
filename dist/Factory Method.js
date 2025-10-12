"use strict";
//El patron de diseño Factory Method es un paron creacional que
//proporciona una interfaz para crear objetos en una superclase
//pero permite que las subclases alteren el tipo de objeto que se crea.
//Este patron es util cuando una clase no puede anticipar 
//la clase de objetos que debe crear.
//El factoy method se utilza para delegar la responsabilidad
//de la instanciacion a las subclases.
//Productos Concretos: Estas son las calses que implementan la interfaz del Producto.
class ProductoConcretoA {
    operacion() {
        return 'Resultado de ProductoConcretoA';
    }
}
class ProductoConcretoB {
    operacion() {
        return 'Resultado de ProductoConcretoB';
    }
}
//Creado Abstracto: Esta clase declara el metodo fabrica que devuelve
//objetos de tipo Producto. Las subclases de esta clase implementan 
//el metodo fabrica para crear instancias de producots concretos.
//Este es el Abstract Factory
class Creador {
    algoOperacion() {
        const producto = this.factoryMethod();
        return `Creador: El mismo codigo del creador ha funcionado con ${producto.operacion()} `;
    }
}
//Creadores Concretos: Estas son las subclases que implementan el metodo fabrica del creador abstracto
class CreadorConcretoA extends Creador {
    factoryMethod() {
        return new ProductoConcretoA();
    }
}
class CreadorConcretoB extends Creador {
    factoryMethod() {
        return new ProductoConcretoB();
    }
}
//Ahora podemos usar el patron Factory Method desde el codigo del cliente
//sin acoplarlo a las clases concretas de los productos que se crean.
function cliente(creador) {
    console.log('No estoy al tanto de la clase del creador, pero funciona');
    console.log(creador.algoOperacion());
}
//El cliente puede trabajr con cualquier subclase de Creador
console.log('App: Lanzando el creadorConcretorA');
cliente(new CreadorConcretoA());
console.log('');
console.log('App: Lanzando el creadorConcretorB');
cliente(new CreadorConcretoB());
//En resumen, el patron Factory Method permite a las subclases decidir
//que clase de objeto crear, promoviendo la flexibilidad y la extensibilidad
//en el codigo. Es especialmente util en situaciones donde el sistema debe ser
//independiente de como se crean, componen y representan sus objetos.

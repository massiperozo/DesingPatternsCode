//El patron de diseño Abstract Factory es un patron creacional que proporciona una interfaz
//para crear familiar de objetos sin especificar sus clases concretas.
//Este patron es util cuando el sistema debe ser independiente de como se crean, 
//componen y representan sus objetos y cuando el sistema debe ser configurado con
//una de varias familias de productos relacionados.
//El patron Abstract Factoty se compone de los sigueintes componenetes:
//1. La fabrica abstracta (Abstract Factory): Esta declara la interfaz para crear 
//familias de objetos relacionado.
//2. Las fabricas concretas (Concrete Factories): Estas implementas la interfaz
//de la fabrica abstracta y crean objetos concretos de una familia especifica.
//3. Los prodcutos abstractos(Abstract Products): Estas declaran interfaces para un tipo de producto
//4. Los productos concretos (Concrete Products): Estas implementasn las interfaces de los productos
//abstractos y definen los objetos que la fabrica concreta crea.
//5. El cliente (Client): Este utiliza solo las interfaces declaradas pro la fabrica abastracta
//y lso productos abstracttos. El cliente no conoce las clases concretas de lso productos que utiliza.

//Entonces iniciamos con las clases abstractas de los productos
abstract class ProductoAbstractoA {
    abstract metodoa(): String;
}

abstract class ProcductoAbstractoB{
    abstract metodob(): String;
}

//Luego las clases concretas de los productos de la familia 1 que implementas las 
//clases abstractas de los productos
class ProductoA1 extends ProductoAbstractoA {
    public metodoa(): String {
        return 'Resultado del Producto A1';
    }
}

class ProductoB1 extends ProcductoAbstractoB {
    public metodob(): String {
        return 'Resultado del Producto B1';
    }
}

//Luego las clases concretas de los productos de la familia 2 que implementas las
//clases abstractas de los productos
class ProductoA2 extends ProductoAbstractoA {
    public metodoa(): String {
        return 'Resultado del Producto A2';
    } 
}

class ProductoB2 extends ProcductoAbstractoB {
    public metodob(): String {
        return 'Resultado del Producto B2';
    }
}

//Luego la clase abstracta de la fabrica abstracta que declara la interfaz para crear
//familias de objetos realcionados
abstract class FabricaAbstracta{
    abstract crearProductoA(): ProductoAbstractoA;
    abstract crearProductoB(): ProcductoAbstractoB;
}

//Luego las clases concretas de las fabricas que implementan la interfaz de la fabrica
//abstracta y crear objetos concretos de una familia especifica
class FabricaConcreta1 extends FabricaAbstracta {
    public crearProductoA(): ProductoAbstractoA {
        return new ProductoA1();
    }
    public crearProductoB(): ProcductoAbstractoB {
        return new ProductoB1();
    }
}

class FabricaAbstracta2 extends FabricaAbstracta {
    public crearProductoA(): ProductoAbstractoA {
        return new ProductoA2();
    }
    public crearProductoB(): ProcductoAbstractoB {
        return new ProductoB2();
    }       
}

//Luego la funcion del cliente que utiliza solo las interfaces declarada por la fabrica
//abstracta y los productos abstactos y no conoce las clases concretas de los productos
//que utiliza
function cliente(fabrica:FabricaAbstracta) {
    const productoA = fabrica.crearProductoA();
    const productoB = fabrica.crearProductoB();

    console.log(productoA.metodoa());
    console.log(productoB.metodob());
}

//Finalmente el codigo de uso que crea una fabrica concreta y la pasa al cliente
console.log('Usando la Fabrica Concreta 1:');
cliente(new FabricaConcreta1());    
console.log('');
console.log('Usando la Fabrica Concreta 2:');
cliente(new FabricaAbstracta2());
//De esta manera se implementa el patron de diseño Abstract Factory en TypeScript.
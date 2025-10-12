//El patron de diseño Builder es un aptron creacional que permite construir
//objetos complejos paso a paso. Este patron es util cuando la construccion 
//de un objeto debe permitir diferentes representaciones del objeto que se esta
//construyendo.
//El patron Builder se compone de los siguientes componentes:
//1. El constructor (Builder): Esta declara la interfaz para crear las partes
//del objeto complejo.
//2. El constructor concreto (Concrete Builder): Esta implementa la interfaz 
//del constructor y construye las partes del objeto completo especifico.
//3. El director (Directo): Este construye el objeto completo utilizando la
//interfaz del constructor
//4. El producto (Producto): Este representa el objeto complejo que se esta 
//contruyendo y esta compuesto por varias partes.
//5. El cliente (Client): Este utiliza el director para construir el objeto
//complejo y luego lo recupera del constructor concreto.

//Entonces iniciamos con la clase Producto que representa el objeto complejo que
//se esta construyendo y esta compuesto por varias parte.
class Producto {
    private partes: string[] = [];

    //Metodo para agregar partes al producto
    public agregarParte(parte: string): void {
        this.partes.push(parte);
    }

    //Metodo para listar las partes de producto
    public listarPartes(): string{
        return `Partes del producsto ${this.partes.join(', ')}\n`;
    }
}

//Luego la clase abstracta del constructor que declara la interfaz para crear
//las partes del objeto complejo
abstract class Builder {
    abstract construirParteA(): void;
    abstract construirParteB(): void;
    abstract construirParteC(): void;
    abstract obtenerProducto(): Producto;
}

//Luego la clase concreta del constructor que implementa la interfaz del constructor 
//y construye las partes del objeto completo especifico
class ConcreteBuilder1 extends Builder {
    private producto: Producto;

    constructor(){
        super();
        this.producto = new Producto();
    }

    public construirParteA(): void {
        this.producto.agregarParte('ParteA1');
    }

    public construirParteB(): void {
        this.producto.agregarParte('ParteB1');
    }   

    public construirParteC(): void {
        this.producto.agregarParte('ParteC1');
    }   

    public obtenerProducto(): Producto {    
        const resultado = this.producto;
        this.reset();
        return resultado;
    }
    private reset(): void {
        this.producto = new Producto();
    }   
}

//Luego la clase concreta del constructor que implementa la interfaz del constructor
//y construye las partes del objeto completo especifico
class ConcreteBuilder2 extends Builder {
    private producto: Producto;
    constructor(){
        super();
        this.producto = new Producto();
    }               
    public construirParteA(): void {
        this.producto.agregarParte('ParteA2');
    }
    public construirParteB(): void {
        this.producto.agregarParte('ParteB2');
    }   
    public construirParteC(): void {    
        this.producto.agregarParte('ParteC2');
    }   
    public obtenerProducto(): Producto {    
        const resultado = this.producto;
        this.reset();
        return resultado;
    }           
    private reset(): void {
        this.producto = new Producto();
    }

}

//Luego la clase del director que construye el objeto completo y contrla el proceso de
//construccion utilizando la interfaz del constructor
class Director {
    //Se define el constructor que se va a utilizar, se pone != para indicar que
    //no se inicializa en este punto
    private builder!: Builder;

    //Establece el constructor que se va a utilizar
    public setBuilder(builder:Builder):void{
        this.builder = builder;
    }

    //Metodo para contruir un producto minimo
    public construirProductoMinimo(): void {
        this.builder.construirParteA();
    }

    //Metodo para construir un producto completo
    public construirProductoCompleto(): void {
        this.builder.construirParteA();
        this.builder.construirParteB();
        this.builder.construirParteC();
    }
}

//Luego el cliente que utiliza el director para construir el objeto completo.
//Utiliza el director y el builder concreto para construir el objeto complejo
function cliente(builder:Builder){
    const director = new Director();
    director.setBuilder(builder);

    console.log('Producto minimo:');
    director.construirProductoMinimo();
    console.log(builder.obtenerProducto().listarPartes());

    //El cliente tambien puede controlar directamente el proceso
    //de construccion sin el director
    console.log('Producto completo:');
    builder.construirParteA();
    builder.construirParteB();
    builder.construirParteC();
    console.log(builder.obtenerProducto().listarPartes());
}

//Finalmente el codigo de usos que crea un bulder concretor y lo pasa al cleinte
const builder1 = new ConcreteBuilder1();
cliente(builder1);
const builder2 = new ConcreteBuilder2();
cliente(builder2);  

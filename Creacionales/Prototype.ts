//El patron de diseño Protoype es un patron creacional que permite clonar 
//objetos existente sin que el codigo dependa de sus clases concretas.
//Esto es util cuando la creacion de un objeto es costosa o compleja.
//El patron Protoype se basa en un prototipo que define un metodo de clonacion.
//Las clases concretas implementan este metodo para crear copias de si mismas.
//El cliente utiliza el metodo de clonacion para obtener nuevas instancias sin 
//conocer los detalles de su creacion.

//Empezamos con la interfaz del prototipo que declara el metodo de clonacion
interface Protoype{
    clone(): Protoype;
}

//Luego, creamos una clase concreta que implementa la interfaz del Prototipo
class ProtipoConcreto implements Protoype{
    private name: string;
    private value: number;

    constructor(name: string, value: number){
        this.name = name;
        this.value = value;
    }   

    //Metodo para clonar el objeto.En TypeScript, podemos usar Object.assign o spread operator.
    clone(): Protoype{
        return new ProtipoConcreto(this.name, this.value);
    }

    //Metodo para obtener la informacion del objeto
    getInfo(): string{
        return `PrototipoConcreto: {name: ${this.name}, value: ${this.value}}`;
    }

    //Metodo para modificar el valor del objeto(asi demostramos que las copias son independientes)
    setValue(value: number): void{
        this.value = value;
    }   
}


//Codigo del cleinte que utiliza el patron Prototype para crear copias de objetos
function cliente(){
    //Creamos un objeto prototipo
    const prototipo = new ProtipoConcreto("Original", 100);
    console.log(`Protipo origina ${prototipo.getInfo()}`);

    //Clonamos el objeto prototipo
    const clone = prototipo.clone() as ProtipoConcreto;
    console.log(`Prototipo clonado: ${clone.getInfo()}`);

    //Modificamos el valor del clon para demostrar que son independientes
    clone.setValue(200);
    console.log(`Prototipo clonado modificado: ${clone.getInfo()}`);
    console.log(`Prototipo original despues de modificar el clon: ${prototipo.getInfo()}`);
}

//Ejemplo de uso
cliente();
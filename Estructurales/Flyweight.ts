//El patron de diseño Flyweight es un patron estructural que tiene como objetivo reducir
//el consumo de memoria al compartir objetos similares en lugar de crear nuevos objeetos
//para cada instancia. Este patron es especialmente util cuando se trabaja con un gran
//numero de objetos que comparten caracteristicas comunes.

//El patron flyweight se compone de los siguientes elementos clave:
//1. Flyweight: es la interfaz o clase abstracta que define los metodos que los objetos
//flyweight deben iimplementar. Estos metodos suelen incluir operaciones que pueden
//ser realizadas en los objetos flyweight.
//2. ConcreteFlyweight: es la implementacion concreta de la interfaz flyweight. Estos
//objetos contienen el estado intrinseco que es compartido entre multiples instancias.
//El estado intenseco es inmutable y no cambia entre diferentes contexto.
//3. UnsharedConcreteFlyweight: es una implementacion de flyweight que no se comparte.
//Estos objetos contienen el estado extrinseco que es unico para cada instancia y no
//puede ser compartido
//4.FlyweightFactory: es responsable de crear y gestionar los objetos flyweeight. La
//fabrica mantiene un pool de objetos flyweight y porporciona metodos para obtener 
//instancias compartidas. Si un objeto flyweight con el mismo estado intrinseco ya 
//existe, la fabrica devuelve la instancia existente en lugar de crear una nueva.
//5. Cliente: es el codigo que utiliza los objetos flyweight. El cliente solicita
//objetos flyweight a la fabrica y los utiliza en su contexto especifico, proorcionando
//el estado extrinseco necesario para cada instancia.

//Ahora empezamos con Flyweight, este es la interfaz que define los metodos que los 
//objetos flyweight deben implementar.
interface Flyweight {
    operacion(EstadoExtrinseco: string):void;
}

//Luego con el ConcreteFlyweight, que es la implementacion concreta de la interfaz flyweight
//Estos objetos contienen el estado intrinseco que es compartido entre multiples instancias
//El estado intrinseco es inmutable y no cambia entre diferentes contexto.
class ConcreteFlyweight implements Flyweight {
    private EstadoIntrinseco: string;

    constructor(EstadoIntrinseco: string) {
        this.EstadoIntrinseco = EstadoIntrinseco;
    }

    operacion(EstadoExtrinseco: string): void {
        return console.log(`ConcreteFlyweight: Estado Intrinseco = ${this.EstadoIntrinseco}, Estado Extrinseco = ${EstadoExtrinseco}`);
    }
}

//Luego con UnsharedConcreteFlyweight, que es una implementacion de flyweight que no se
//comparte. Estos objetos contienen el estado extrinseco que es unico para cada isntancia
//y no puede ser compartido.
class UnsharedConcreteFlyweight implements Flyweight {
    private todosEstados: string;

    constructor(Estado: string) {
        this.todosEstados = Estado;
    }

    operacion(EstadoExtrinseco: string): void {
        return console.log(`UnsharedConcreteFlyweight: Todos los estados = ${this.todosEstados}, Estado Extrinseco = ${EstadoExtrinseco}`);
    }
}

//Despues de esto, seguimos con FlyweightFactory que se encarga de crear y gestioanr los
//objetos flyweight. La Fabrica mantiene un pool de objetos flyweight y proporciona
//metodos para obtener instancias compartidas. Si un objeeto flyweight con el mismo estado
//instrinseco, ya existe, la fabrica devuelve la instancia existente en lugar de crear uno nuevo
//Esto ayuda a reducir el consumo de memoria al evitar la creacion de objetos duplicados
class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};
    
    //Metodo para obtener un flyweight. Si no existe lo crea.
    obtenerFlyweight(key:string): Flyweight {
        if(!(key in this.flyweights)){
            this.flyweights[key] = new ConcreteFlyweight(key);
            console.log("FlyweightFactory: Creando un nuevo flyweight.");
        }
        return this.flyweights[key];
    }

    //Metodo para crea un flyweight no compartido
    crearUnsharedFlyweight(Estado: string): Flyweight {
        return new UnsharedConcreteFlyweight(Estado);
    }

    //Metodo para listar los flyweights compartidos
    listarFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: Tengo ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}


//Finalmente tenemos el codigo del cleinte, que utiliza los objetos flyweight. El lciente
//solicita objetos flyweight a la fabrica y los utiliza en su contexto especifico
//proporcionando el estado extrinseco necesario para cada instancia.
function cliente (factory: FlyweightFactory) {
    const flyweightA = factory.obtenerFlyweight("A");
    const flyweightB = factory.obtenerFlyweight("B");
    const flyweightC = factory.obtenerFlyweight("C");
    
    console.log(flyweightA.operacion("Primero"));
    console.log(flyweightB.operacion("Segundo"));
    console.log(flyweightC.operacion("Tercero"));
    

    //reutilizando los flyweights existentes
    const flyweightA2 = factory.obtenerFlyweight("A");
    console.log(flyweightA2.operacion("Reutilizado"));

    //crear un flyweight no compartido
    const unsharedFlyweight = factory.crearUnsharedFlyweight("X");
    console.log(unsharedFlyweight.operacion("Unshared"));

    factory.listarFlyweights();
}

//Ejemplo de uso
const factoy = new FlyweightFactory();
cliente(factoy);
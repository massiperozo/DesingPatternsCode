//El patron de diseño Stragey (Estrategia) es un patron comportamental que define una familia 
//de algotirmos, encapsula cada uno de ellos y los hace intercambiables.
//El patron Strategy permite que el algoritmo varie independientemente de los clientes
//que lo utilizan.
//Este patron es util cuando se tienen varios algoritmos para un problema especifico
//y se quiere elegir el algoritmo a utilizar en tiempo de ejecucion.

//Para empezar se crea una interfaz que define los metodos que cada estrategia debe
//implementar.
interface Strategy{
    execute(data:string):String;
}

//Luego se crean las clases concretas que implementan la interfaz Strategy
class EstrategiaConcretaA implements Strategy{
    execute(data:string): String{
        return `EstrategiaConcretaA: Procesando ${data} con algoritmo A`;
    }
}

class EstrategiaCOncretaB implements Strategy{
    execute(data:string): String{
        return `EstrategiaConcretaB: Procesando ${data} con algoritmo B`;
    }
}

//Luego se crea la clase Contexto(Contexto) esta mantiene una referencia a un objeto
//Strategy y es el encargado de interactuar con las estrategias concretas.
class Contextoo {
    private strategy: Strategy;

    constructor(strategy: Strategy){
        this.strategy = strategy;
    }

    //Metodo para cambiar laestrategia en tiempo de ejecucion
    setStrategy(strategy: Strategy): void{
        this.strategy = strategy;
    }

    //Metodod que delega la ejecucion al algoritmo actual.
    executeStrategy(data: string): String{
        return this.strategy.execute(data);
    }
}

//Finlamente se crea la clase cliente que utiliza el Contexto y las estretegias concretas
function cliente(){
    //Estrategia inicial: EstrategiaConcretaA
    const context = new Contextoo(new EstrategiaConcretaA());
    console.log("Cliente: Usando la Estrategia A");
    console.log(context.executeStrategy("Datos de entrada 2"));


    //Cambio de estrategia a EstrategiaConcretaB en tiempo de ejecucion
    context.setStrategy(new EstrategiaCOncretaB());
    console.log("Usando la Estrategia B");
    console.log(context.executeStrategy("Datos de entrada 4"));
}

//Ejemplo de uso
cliente()
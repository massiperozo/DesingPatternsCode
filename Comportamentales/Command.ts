//El patron de diseño Command (Comando) es un patron comportamental que convierte una
//solicitud en un objeto independiente que contiene toda la informacion sobre la solicitud
//Esto permite parametrizar objetos con operaciones, retrasar o poner en cola la ejecucion
//de una operacion y soportar operaciones que se pueden deshacer.
//Tambien permite separar el emisor de la solicitud del receptor que la ejecuta.

//Primero, empezamos creando la interfaz command que declara un metodo para ejecutar el 
//comando
interface Command{
    execute():void;
    undo():void //Para operaciones que se pueden deshacer
}

//Luego de esto, creamos la clase que sabe como realizar las operaciones asociadas
//a un comando. Esta clase es conocida como el receptor
class Receptor {
    //Metoodo que realiza la accion especifica
    accion():void{
        console.log("Receptor: Accion ejectada");
    }

    //Metodo para deshacer la accion
    undoAccion():void{
        console.log("Receptor: Accion deshecha");
    }
}

//Leugo, creamos las clases de comando concretas que implementan la interfaz Command 
//y definen la relacion entre una accion y un receptor
class ComandoConcreto implements Command{
    private receptor: Receptor;

    constructor(receptor: Receptor){
        this.receptor = receptor;
    }

    //Ejecuta la accion delegando al Receptor
    execute():void{
        this.receptor.accion();
    }

    //Deshace la accion delegando al Receptor
    undo():void{
        this.receptor.undoAccion();
    }
}

//Ahora despues de esto, se crea la clase Invocador, esta se encarga de iniciar la solicitud
//de comando. El invocador no sabe nada sobre las operaciones que se van a realizar
//solo sabe como ejecutar un comando
class Invocador{
    private comando: Command | null = null;

    //Establece el comaando a ejecutar
    setComando(c:Command):void{
        this.comando = c;
    }

    //Ejecuta el comando
    ejecutarComando():void{
        if(this.comando){
            this.comando.execute();
        }
    }

    //Deshace el comando
    deshacerComando():void{
        if(this.comando){
            this.comando.undo();
        }
    }
}

//Finalmente, se crea el codigo del cliente que configura los objetos y los relaciona
//entre si
function cliente(){
    const receptor = new Receptor();
    const comando = new ComandoConcreto(receptor);
    const invocador = new Invocador();

    //Configura el condo en el invocador
    invocador.setComando(comando);

    //Ejecuta el comando
    console.log("Cliente: Ejecutando el comando");
    invocador.ejecutarComando();

    //Deshace el comando
    console.log("Cliente: Deshaciendo el comando");
    invocador.deshacerComando();
}

//Ejemplo de uso
cliente();

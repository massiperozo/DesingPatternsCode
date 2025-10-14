//El patron de diseño Facade (Fachada) es un patron de diseño estructural que 
//proporciona una interfaz simplificada para un conjunto complejo de clases,
//bibliotecas o frameworks. El objetivo principal de este patron es ocultar la complejidad
//de un sistema y proporcionar una interfaz mas sencilla y facil de usar para el usuario
//o cliente. Esto facilita la interaccion con el sistema y mejora la mantenibilidad del
//codigo. Este patron es especialmente util en sistemas grandes y complejos desde la
//perspectiva del usuario final, ya que reduce la cantidad de codigo que el usuario 
//necesita entender y manejar.

//Primero se crean los susbistemas que vienen siendo parte del subsistema complejo
class SubsistemaA{
    operacion():string{
        return `Subsistema A: Operacion A ejecutada`;
    }
}

class SubsistemaB{
    operacion():string{
        return `Subsistema B: Operacion B ejecutada`;
    }
}

class SubsistemaC{
    operacion():string{
        return `Subsistema C: Operacion C ejecutada`
    }
}

//Despues creamos la clase Facade que va a interactuar con los subsistemas
class Facade{
    protected subsistemaA: SubsistemaA;
    protected subsistemaB: SubsistemaB;
    protected subsistemaC: SubsistemaC;

    constructor(){
        this.subsistemaA = new SubsistemaA();
        this.subsistemaB = new SubsistemaB();
        this.subsistemaC = new SubsistemaC();
    }

    //Metodo que simplifica la interaccion con los subsistemas
    operacion():string{
        let resultado = `Facade: Iniciado operaciones del susbsitema:\n`
        resultado+= this.subsistemaA.operacion() + `\n`;
        resultado+= this.subsistemaB.operacion() + `\n`;
        resultado+= this.subsistemaC.operacion() + `\n`;
        resultado+= `Facade: Operaciones del subsistema finalizadas.`
        return resultado;
    }

    //Otro metodo simplificado para una funcionalidad especifica
    operacionEspecifica():string{
        return `Facade: Operacion especifica ejecutada utilizando ${this.subsistemaA.operacion()}`;
    }

}

//Finalmente el cliente interactua con la calse Facade para acceder al susbsitema siin conocer sus detalles
function cliente(facade: Facade){
    console.log(facade.operacion());
    console.log(facade.operacionEspecifica());
}

//Ejemplo de uso
const facade = new Facade();
console.log(`Cliente: Usado el Facade para simplificar el acceso al subsistema`);
cliente(facade);
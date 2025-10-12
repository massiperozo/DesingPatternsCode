//El patron de diseño Adapter (Adaptador) es un patron de diseño estrucutal que permite 
//que interfaces incompatibles puedan trabajar juntas. Funciona como un puente entre dos
//interfaces diferentes, adoptando la interfaz de una clase a otra que el cleinte espera.
//El patron Adapter es util cuando se desea utilizat una clase existente pero su interfaz
//no es compatible con la se necesita. El adaptador envuelve la clase existente y proporciiona
//una nueva interfaz que es compatible con la que el cliente espera.
//El patron Adapter es comunmente utilziado para integrar librerias ocomponenetes 
//de terceros en un sistema existente sin modificar su codigo fuente.

//Empezamos creando la interfaz del Objetivo (Targer) que define la interfaz que el cliente
//espera utilizar.
interface Target {
    request(): string;
}

//Luego, se crea una clase existente (Adaptee) que tiene la interfaz incompatible con la 
//que el cliente espera.
class Adaptee{
    //Este es un metodo  especifico del Adaptee que no es compatible con la interfaz del
    //Target
    specificRequest(): string{
        return "Respuesta especfica del Adaptee";
    }
}

//Ahora, se crea la clase Adaptador (Adapter) que implementa la interfaz del Target
//y adopta la interfaz del Adaptee.
class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee){
        this.adaptee = adaptee;
    }

    //Implementa el metodo reques del Target y lo adpta al metodod specificRequest del
    //Adaptee
    request():string{
        return `Adapter: (Traduciendo la llamda al Adapte) ${this.adaptee.specificRequest()}`
    }

}

//Finalmente, se crea el cliente que utiliza la interfaz del target.
function cliente(target: Target){
    console.log(`target: ${target.request()}`);
}

//Ejemplo de usos
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log ("Cliente: Udando el Adaptee directamente");
console.log(`adaptee:${adaptee.specificRequest()}`);

console.log("Cliente: Usando el Adaptador");
cliente(adapter);
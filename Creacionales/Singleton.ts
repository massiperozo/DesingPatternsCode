//El patron de diseño Singleton es un patron creacional que asegura que una clase tenga 
//una unica instancia y proporciona un punto de acceso global a ella.
//Esto es util cuando se necesita controlar el acceso a un recurso compartido, como una 
//conexion a una base de datos o un archivo de configuracion.
//El patron Singleton se implementa creando una clase con un constructor privado y un 
//metodo estatico que devuelve la unica instacia de la clase.
//Si la instancia no existe, se crea y se devuelve. Si ya existe, se devuelve la instacia existente.

class Singleton {
    private static instance: Singleton;

    //Propiedad privada para demsotrar que la instancia es compartida
    private data: string;
    //Constructor privado para evitar la instanciacion directa
    private constructor() {
        this.data = "Datos iniciales del Singleton";
    }

    //Metodo estatico publico para obtener la unica instacia de la clase.
    public static getInstance():Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }   

        return Singleton.instance;
    }

    //Metodo publico para obtener los datos
    public getData(): string {
        return this.data;
    }   

    //Metodo publico para modificar los datos (demuestra que es la misma instancia)
    public setData(data: string): void {
        this.data = data;
    }   
}

//Codigo del cliente, este intenta crear multiples instancias del Singleton, pero obtiene la misma.
function cliente(){
    //Obtener la unica instancia del Singleton
    const singleton1 = Singleton.getInstance();
    console.log(singleton1.getData()); //Datos iniciales del Singleton

    //Intentar obtener otra instancia del Singleton, deberia ser la misma
    const singleton2 = Singleton.getInstance();
    singleton2.setData('Datos modificados del Singleton');

    //Modifica los datos a traves de la una referencia
    singleton1.setData('Datos modificados del Singleton');

    //Verifica que la otra instancia refleja el cambio
    console.log('Despues de modificar');
    console.log(`Singleton1 data: ${singleton1.getData()}`); //Datos modificados del Singleton
    console.log(`Singleton2 data: ${singleton2.getData()}`); //Datos modificados del Singleton

    //Verifica que ambas referencias son iguales
    console.log(`singleton1 y singleton2 son la misma instancia: ${singleton1 === singleton2}`); //true
}


//Ejemplo de uso
cliente();
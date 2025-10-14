//El patron de diseño Composite, es un patron estructural que permite componer objetos
//en estructuras de arborl, para representar jerarquias parte-todo.
//El patron Composite permite a los clientes tratar de manera uniforme objetos individuales
//y composiciones de objetos.
//El patron Composite se utiliza cuando se tiene una estructura jerarquica de objetos.

//Empecemos definiendo una interfaz comun para los objetos que formaran parte de la composicion.
interface Componente {
    operacion():string;
}

//Ahora creamos la "hoja" este representa los objetos individuales en la composicion.
class Hoja implements Componente {
    operacion():string{
        return `Hola soy una hoja (objeto individual)`;
    }
}

//Despues hacemos el compuesto, este represneta los nodos que pueden tener hijos.
//Implementa operaciones delegando a sus hijos.
class Compuesto implements Componente {
    private hijos: Componente[] = [];

    operacion(): string {
        const result = this.hijos.map(hijos=>hijos.operacion());
        return `Compuesto,${result.join(",")}`;
    }

    add(componente: Componente): void {
        this.hijos.push(componente);
    }

    remove(componente: Componente): void {
        const i = this.hijos.indexOf(componente);
        if(i!==-1){
            this.hijos.splice(i,1);
        }
    }

    obtenerHijos(): Componente[] {
        return this.hijos;
    }
}

//Finalmente hacemos el codigo del cliente, este trabaja con los objetos a traves de la
//interfaz comun.
function cliente (componente: Componente){
    console.log(`RESULTADO: ${componente.operacion()}`);
}

//Ejmploe de uso
const hoja1 = new Hoja();
const hoja2 = new Hoja();
const hoja3 = new Hoja();

const compuesto1 = new Compuesto();
compuesto1.add(hoja1);
compuesto1.add(hoja2);

const compuesto2 = new Compuesto();
compuesto2.add(hoja3);

const root = new Compuesto();
root.add(compuesto1);
root.add(compuesto2);

console.log("Cliente: Trabajando con una hoja individual:");
cliente(hoja1);

console.log('Cliente: Trabajando con la composicion completa:');
cliente(root);

console.log("Cliente: Trabajando con una composicion intermedia:");
cliente(compuesto1);
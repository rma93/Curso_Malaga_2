// Ejemplo de código en ES6

interface DatosLibro{
    titulo? : any;
    tematica: string;
    paginas: number;
    editorial?: string;
    mostrarDatos: Function;
    isbn: string | number;
    calcularPrecio() : number
}


class Libro implements DatosLibro{
    //private datoLibro : DatosLibro;
    tematica;
    paginas;
    isbn:string;

    constructor(tematica,paginas){
        this.tematica = tematica;
        this.paginas = paginas;
    }

    mostrarDatos(){
    }

    calcularPrecio(){
        return 1;
    }

    prueba() : void {}

}


class LibroTecnico extends Libro {
    public precio: number;
    private capitulos: Array<string>;
    constructor(tematica, paginas, precio) {
        super(tematica, paginas);
        this.capitulos = [];
        this.precio = 1;
        // ...
    }

    precioTotal(pValor:number = 1) {
        console.log(pValor*this.precio);
    }
}


let oLibro  = new LibroTecnico("Informatica",129,30);

oLibro.precioTotal;
console.log(oLibro);
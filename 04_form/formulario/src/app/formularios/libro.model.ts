export interface Libro {
  autor: string;
  titulo: string;
  editorial: string;
  numPag: number;
  exlibris: boolean;
  genero: string;
  pais: Pais;
}


export interface Pais {
codigo: string;
nombre: string;
}

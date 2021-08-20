export interface RutinasInterface{
    zona: string[];
    ejercicios:Ejercicios[];
}

export interface Ejercicios{
    id?: number | any;
    zona?: string | any;
    numero?: number | any;
    modelo?: string | any;
    codigo?: string | any;

}



export interface Preferencias{
    zona: string[];
    nivel: number;
    
}
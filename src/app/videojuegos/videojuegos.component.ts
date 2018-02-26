import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent{ // En la clase es donde cargaremos la lógica del componente.
    // TypeScript nos permite definir el tipo de datos que van a recoger nuestras variables.
    // También podemos definir el valor any, que admitirá cualquier tipo de dato.
    public nombre:string;
    public mejor_juego:string;
    public mejor_juego_retro:string;
    public mostrar_retro:boolean;
    public color:string;
    public year:number;

    public videojuegos:Array<string>; // En este caso definimos tanto el tipo de dato de la variable como el tipo de dato de dentro del array.
        

    constructor(){ 
        // Aquí inicializamos nuestras variables.
        // Si insertamos un tipo de dato no válido, no se compilará.
        this.nombre = 'Videojuegos 2018';
        this.mejor_juego = 'GTA 5';
        this.mejor_juego_retro = 'Super Mario Bros';
        this.mostrar_retro = false;
        this.color = 'red';
        this.year = 2018;
        this.videojuegos = [ 
            'Los Simpsons: Hit and run',
            'Assasins creed',
            'Call of duty',
            'Tekken 5'
        ];
    }
}
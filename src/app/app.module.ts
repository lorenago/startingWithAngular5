import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Aquí es donde importaremos los componentes.
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component'

@NgModule({ // Decorador que nos permite definir una serie de configuraciones
  declarations: [ // Aquí debemos cargar todos mis componentes, directivas o pipes.
    AppComponent,
    VideojuegosComponent
  ],
  imports: [ // Aquí cargaremos otros módulos (internos de Angular o módulos creados por nosotros).
    BrowserModule
  ],
  providers: [], // Servicios (internos de Angular o propios.)
  bootstrap: [AppComponent] // Componente principal que se va a cargar nada más arrancar este módulo.
})
export class AppModule { } // Para crear el módulo.

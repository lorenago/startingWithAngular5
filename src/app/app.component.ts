import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Mi nueva app';
  public description = 'Curso de introdución a Angular 5. Si no indicamos nada, las propiedades son públicas. La extensión .ts hace referencia a TypeScript';
}

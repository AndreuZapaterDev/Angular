import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POKEMON';

  // Genera una lista del 1 al 9
  listaPokemon = Array.from({ length: 9 }, (_, i) => i + 1); 
}
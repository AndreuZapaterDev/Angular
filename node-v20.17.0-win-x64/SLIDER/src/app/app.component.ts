import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLIDER';

  fotos = [
    { id: 0, url: 'https://picsum.photos/id/30/300/200' },
    { id: 1, url: 'https://picsum.photos/id/31/300/200' },
    { id: 2, url: 'https://picsum.photos/id/32/300/200' },
    { id: 3, url: 'https://picsum.photos/id/33/300/200' },
    { id: 4, url: 'https://picsum.photos/id/34/300/200' },
    { id: 5, url: 'https://picsum.photos/id/35/300/200' },
    { id: 6, url: 'https://picsum.photos/id/36/300/200' },
    { id: 7, url: 'https://picsum.photos/id/37/300/200' },
    { id: 8, url: 'https://picsum.photos/id/38/300/200' },
    { id: 9, url: 'https://picsum.photos/id/39/300/200' },
  ];

  indiceIzquierda = 9;
  indiceCentro = 0;
  indiceDerecha = 1;

  anterior() {
    this.indiceIzquierda = (this.indiceIzquierda - 1 + this.fotos.length) % this.fotos.length;
    this.indiceCentro = (this.indiceCentro - 1 + this.fotos.length) % this.fotos.length;
    this.indiceDerecha = (this.indiceDerecha - 1 + this.fotos.length) % this.fotos.length;
  }

  siguiente() {
    this.indiceIzquierda = (this.indiceIzquierda + 1) % this.fotos.length;
    this.indiceCentro = (this.indiceCentro + 1) % this.fotos.length;
    this.indiceDerecha = (this.indiceDerecha + 1) % this.fotos.length;
  }

  irAIndice(indice: number) {
    this.indiceCentro = indice;
    this.indiceIzquierda = (indice - 1 + this.fotos.length) % this.fotos.length;
    this.indiceDerecha = (indice + 1) % this.fotos.length;
  }
}
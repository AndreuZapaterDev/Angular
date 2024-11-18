import { Component } from '@angular/core';

@Component({
  selector: 'app-paints-component',
  standalone: true,
  templateUrl: './paints-component.component.html',
  styleUrls: ['./paints-component.component.css']
})
export class PaintsComponentComponent {
  photos = ['paint1.jpg', 'paint2.jpg', 'paint3.jpg'];
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-component',
  standalone: true,
  templateUrl: './artist-component.component.html',
  styleUrls: ['./artist-component.component.css']
})
export class ArtistComponentComponent {
  photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];
}
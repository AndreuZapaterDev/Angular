import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.css']
})
export class GalleryComponentComponent {
  isHoveredArtists = false;
  isHoveredPaints = false;

  onMouseEnterArtists() {
    this.isHoveredArtists = true;
  }

  onMouseLeaveArtists() {
    this.isHoveredArtists = false;
  }

  onMouseEnterPaints() {
    this.isHoveredPaints = true;
  }

  onMouseLeavePaints() {
    this.isHoveredPaints = false;
  }
}
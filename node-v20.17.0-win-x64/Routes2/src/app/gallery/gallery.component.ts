import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  isHoveredArtists = false;
  isHoveredPaints = false;

  toggleHoverArtists() {
    this.isHoveredArtists = !this.isHoveredArtists;
  }

  toggleHoverPaints() {
    this.isHoveredPaints = !this.isHoveredPaints;
  }
}
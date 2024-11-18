import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  photos = [
    { title: 'HTML', url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { title: 'CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { title: 'JavaScript', url: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png' }
  ];

  currentPhotoIndex = 0;

  constructor() {
    this.changePhoto();
  }

  get currentPhoto() {
    return this.photos[this.currentPhotoIndex];
  }

  changePhoto() {
    this.currentPhotoIndex = Math.floor(Math.random() * this.photos.length);
  }
}
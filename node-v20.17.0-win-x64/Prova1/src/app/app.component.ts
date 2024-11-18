import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoComponent, AvatarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prova1';
}
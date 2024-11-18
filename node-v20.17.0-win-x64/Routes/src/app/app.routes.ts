import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { ArtistComponentComponent } from './artist-component/artist-component.component';
import { PaintsComponentComponent } from './paints-component/paints-component.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'gallery', component: GalleryComponentComponent, children: [
    { path: 'artists', component: ArtistComponentComponent },
    { path: 'paints', component: PaintsComponentComponent }
  ]},
  { path: 'contacts', component: ContactsComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtistsComponent } from './artists/artists.component';
import { PaintsComponent } from './paints/paints.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent, children: [
    { path: 'artists', component: ArtistsComponent },
    { path: 'paints', component: PaintsComponent }
  ]},
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
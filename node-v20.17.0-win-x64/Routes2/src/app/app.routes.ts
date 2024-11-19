import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtistsComponent } from './artists/artists.component';
import { PaintsComponent } from './paints/paints.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent,},
  { path: 'gallery', title: 'Gallery', component: GalleryComponent,
    children: [
    { path: 'artists',  title: 'Artists' , component: ArtistsComponent },
    { path: 'paints',  title: 'Paints', component: PaintsComponent }
  ]},
  { path: 'contacts',  title: 'Contact', component: ContactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

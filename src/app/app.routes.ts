import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { YourMoviesComponent } from './your-movies/your-movies.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login page' },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home movies',
  },
  {
    path: 'your-movies',
    component: YourMoviesComponent,
    title: 'Your movies',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile'
  }
];

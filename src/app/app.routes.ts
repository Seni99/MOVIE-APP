import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieDetails } from './pages/movie-details/movie-details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  // Redirección de la raíz a /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Rutas estáticas
  { path: 'home', component: Home },
  { path: 'movies', component: MovieList },
  
  // Ruta dinámica con parámetro :movieId
  { path: 'movies/:movieId', component: MovieDetails },
  
  // Ruta comodín para el error 404 (Siempre va al final)
  { path: '**', component: NotFound }
];
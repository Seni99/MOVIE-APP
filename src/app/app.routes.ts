import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      { 
        path: 'home', 
        loadComponent: () => import('././pages/home/home').then(m => m.Home) 
      },
      { 
        path: 'movies', 
        loadComponent: () => import('./pages/movie-list/movie-list').then(m => m.MovieListComponent) 
      },
      { 
        path: 'movies/:movieId', 
        loadComponent: () => import('./pages/movie-details/movie-details').then(m => m.MovieDetailsComponent) 
      }
    ]
  },
  { 
    path: '**', 
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound) 
  }
];
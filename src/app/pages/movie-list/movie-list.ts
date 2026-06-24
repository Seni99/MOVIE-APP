import { Component, inject, signal } from '@angular/core'; // 1. Importa 'signal'
import { MovieService } from '../../services/movies';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Lista de Películas</h1>
    <ul>
      @for (movie of movies(); track movie.id) {
        <li>
          <a [routerLink]="['/movies', movie.id]">{{ movie.title }}</a>
        </li>
      }
    </ul>
  `
})
export class MovieListComponent {
  private movieService = inject(MovieService);
  
  // 2. Usamos 'signal' en lugar de 'toSignal'
  movies = signal(this.movieService.getMovies()); 
}
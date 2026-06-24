import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movies';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul>
      @for (movie of movies; track movie.id) {
        <li>
          <a [routerLink]="['/movies', movie.id]">{{ movie.title }}</a>
        </li>
      }
    </ul>
  `
})
export class MovieListComponent {
  private movieService = inject(MovieService);
  movies = this.movieService.getMovies();
}
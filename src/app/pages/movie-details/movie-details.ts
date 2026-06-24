import { Component, inject, input } from '@angular/core';
import { MovieService } from '../../services/movies';
@Component({
  standalone: true,
  template: `
    @if (movie(); as m) {
      <h1>{{ m.title }}</h1>
      <p>Director: {{ m.director }}</p>
    } @else {
      <p>Película no encontrada.</p>
    }
  `
})
export class MovieDetailsComponent {
  movieId = input.required<string>(); // Captura automáticamente el parámetro de la URL
  private movieService = inject(MovieService);
  movie = () => this.movieService.getMovieById(this.movieId());
}
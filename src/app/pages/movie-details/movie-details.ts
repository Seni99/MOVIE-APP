import { Component, inject, input, computed } from '@angular/core'; // Añadimos computed
import { MovieService } from '../../movies';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  template: `
    @if (movie()) {
      <h1>{{ movie()?.title }}</h1>
      <button (click)="onDelete()">Eliminar</button>
    } @else {
      <p>Cargando...</p>
    }
  `
})
export class MovieDetailsComponent {
  movieId = input.required<string>();
  private movieService = inject(MovieService);

  // Convertimos el input en observable y luego en señal
  private movie$ = toObservable(this.movieId).pipe(
    switchMap(id => this.movieService.getMovieById(id))
  );
  
  movie = toSignal(this.movie$, { initialValue: null });

  onDelete() {
    this.movieService.deleteMovie(this.movieId()).subscribe(() => {
      alert('Película eliminada');
    });
  }
}
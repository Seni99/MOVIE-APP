// En movie-list.ts
export class MovieListComponent {
  // Comenta esto:
  // private movieService = inject(MovieService);
  // movies = toSignal(this.movieService.getMovies(), { initialValue: [] });

  // Pon esto temporalmente:
  movies = () => [{ id: '1', title: 'Prueba de carga' }];
}
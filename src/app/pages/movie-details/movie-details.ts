import { Component, inject, input, computed } from '@angular/core'; 
import { MovieService } from '../../services/movies'; // Asegúrate de que esta ruta sea la correcta a tu servicio

@Component({
  selector: 'app-movie-details',
  standalone: true,
  template: `
    @if (movie()) {
      <h1>{{ movie()!.title }}</h1> <!-- Usamos ! porque con el @if sabemos que existe -->
    
    } @else {
      <p>Cargando...</p>
    }
  `
})
export class MovieDetailsComponent {
  movieId = input.required<string>();
  private movieService = inject(MovieService);
  
  // Esta es la parte clave: ahora es una computed simple y limpia
  movie = computed(() => this.movieService.getMovieById(this.movieId()));

  }

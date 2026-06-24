import { Injectable } from '@angular/core';
import { Movie } from '../../movie.interface';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [
    { id: '1', title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi' },
    { id: '2', title: 'The Matrix', director: 'Lana Wachowski', genre: 'Action' },
    { id: '3', title: 'Interstellar', director: 'Christopher Nolan', genre: 'Sci-Fi' }
  ];

  getMovies() { return this.movies; }
  getMovieById(id: string): any { // Pon ": any" temporalmente para eliminar el error
  return this.movies.find(m => m.id === id);
}


}
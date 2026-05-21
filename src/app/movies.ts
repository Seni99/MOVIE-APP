import { Injectable } from '@angular/core';
import { Movie } from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[] = [
    { id: '1', title: 'Inception', director: 'Christopher Nolan', genre: 'Ciencia Ficción' },
    { id: '2', title: 'Pulp Fiction', director: 'Quentin Tarantino', genre: 'Crimen' },
    { id: '3', title: 'The Matrix', director: 'Lana Wachowski', genre: 'Acción' }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: string): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}
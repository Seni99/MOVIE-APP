import { Injectable } from '@angular/core';
import { Movie } from '../movie.interface';
import { TMDB_CONFIG } from './app.config'; // <-- Cambiado a app.config

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // 1. Tu nueva función para traer las películas reales
  async getPeliculasPopulares(): Promise<any> {
    try {
      const url = `${TMDB_CONFIG.baseUrl}/movie/popular?api_key=${TMDB_CONFIG.apiKey}&language=es-ES&page=1`;
      
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      
      return datos.results; 
    } catch (error) {
      console.error('Error al traer películas de TMDB:', error);
      return [];
    }
  }

  // 2. Mantenemos esta función por si tus otros componentes la necesitan
  async getMovies(): Promise<any> {
    return await this.getPeliculasPopulares();
  }
}
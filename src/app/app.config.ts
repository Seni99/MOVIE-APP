import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()) // <-- Esto activa las Input Signals en las rutas
  ]
};

// src/app/api.config.ts

export const TMDB_CONFIG = {
  apiKey: '0c7ef05c2b4264d28e39ca0b3d53a427', // Borra esto y pega tu clave larga entre las comillas
  baseUrl: 'https://api.themoviedb.org/3',
  imagesUrl: 'https://image.tmdb.org/t/p/w500' // Esta te servirá luego para ver las fotos
};
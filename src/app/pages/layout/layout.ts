import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <h1>Mi Catálogo de Películas</h1>
      <nav>
        <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a> |
        <a routerLink="/movies" routerLinkActive="active">Películas</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .active { font-weight: bold; color: blue; }
    nav { padding: 1rem; background: #f4f4f4; }
  `]
})
export class LayoutComponent { }
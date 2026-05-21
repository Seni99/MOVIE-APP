import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Cambiamos esto aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // <-- Y esto aquí para que cure el error del HTML
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'movie-app';
}
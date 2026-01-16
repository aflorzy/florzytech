import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './layout/header/header';
import { Navigation } from './layout/navigation/navigation';
import { Footer } from './layout/footer/footer';

@Component({
  imports: [Header, Navigation, Footer, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web';
}

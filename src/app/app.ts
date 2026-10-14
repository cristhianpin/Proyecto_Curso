import { Component, signal } from '@angular/core';
import { Header } from './Header/header/header';
import { Menu } from './Menu/menu/menu';
import { Footer } from './Footer/footer';

@Component({
  imports: [Header, Menu, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-proyecto-curso');
}

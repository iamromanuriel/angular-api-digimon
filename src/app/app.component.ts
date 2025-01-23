import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digimon-api';
  colors = [{id: 1, name: "Red"}, {id: 2, name: "Blue"}, {id: 3, name: "Green"}]
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digimon-api';
  colors = [{id: 1, name: "Red"}, {id: 2, name: "Blue"}, {id: 3, name: "Green"}]
}

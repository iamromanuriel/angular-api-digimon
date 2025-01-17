import { Component, OnInit } from '@angular/core';
import { ApíService } from '../services/apí.service';
import { ApiResponse, Character } from '../data/ModelCharacter';
import { ItemListComponent } from "../item-list/item-list.component";
import { error } from 'node:console';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    @for (character of charactes; track $index) {
      <app-item-list [character] = "character" />
    }
  `,
  styleUrl: './home.component.css',
  imports: [ItemListComponent]
})
export class HomeComponent implements OnInit {
  charactes: Character[] = [];
  colors : string[] = ["red","yellow","green"];

  constructor(private apiService: ApíService) {}

  ngOnInit(): void {

      this.apiService.getCharacter().subscribe((data) => {
        this.charactes = data;
        console.log(`Body apiServices :: ${data}`);
      });
  }
}

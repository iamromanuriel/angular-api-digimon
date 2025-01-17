import { Component, Input, input } from '@angular/core';
import { Character } from '../data/ModelCharacter';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() character!: Character;
}

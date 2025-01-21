import { Component, Input, input } from '@angular/core';
import { Character } from '../data/ModelCharacter';
import { CardModule} from 'primeng/card'
import {ButtonModule} from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-item-list',
  imports: [CardModule, ButtonModule, ToastModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() character!: Character;
}

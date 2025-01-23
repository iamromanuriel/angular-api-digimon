import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { ItemListComponent } from '../item-list/item-list.component';
import { Character } from '../data/ModelCharacter';

@Component({
  selector: 'app-list',
  imports: [CommonModule, DataViewModule, SelectButton, ItemListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() characters : Character[] = []
  layout: 'list' | 'grid' = 'list';
  options = ['list','grid'];
}


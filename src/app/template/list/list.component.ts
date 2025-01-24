import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { ItemListComponent } from '../item-list/item-list.component';
import { Character } from '../../data/ModelCharacter';
import { ApíService } from '../../services/apí.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  imports: [CommonModule, DataViewModule, SelectButton, ItemListComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {

  constructor(private apiService: ApíService){  }


  layout: 'list' | 'grid' = 'list';
  characters : Character[] = []
  options = ['list','grid'];

  ngOnInit(): void {
      this.apiService.getCharacter().subscribe((data) => {
          this.characters = data
      });
  }
}


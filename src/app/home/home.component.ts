import { Component, OnInit } from '@angular/core';
import { ApíService } from '../services/apí.service';
import { Character } from '../data/ModelCharacter';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CarouselComponent } from "../carousel/carousel.component";
import { CardModule } from 'primeng/card';
import { ItemListComponent } from "../item-list/item-list.component";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
      <div class="flex flex-col">
        <div class="font-semibold text-xl">DataView</div>
        <p-dataview [value]="charactes" [layout]="layout">
          <ng-template #header>
            <div class="flex justify-end">
            <p-select-button [options]="options" [allowEmpty]="false">
                <ng-template #item let-option>
                   <i class="pi " [ngClass]="{ 'pi-bars': option === 'list', 'pi-table': option === 'grid' }"></i>
                </ng-template>
            </p-select-button>
            </div>
          </ng-template>

          <ng-template #list let-items>
            <div class="flex flex-col">
              <div *ngFor="let digimon of charactes; let i = index">
                <app-item-list [character]="digimon"/>
              </div>
            </div>

          </ng-template>

        </p-dataview>
      </div>
  `,
  styles: `
    ::ng-deep {
      .p-orderlist-list-container{
        width: 100%;
      }
    }
  `,
  imports: [CommonModule, ButtonModule, SelectButtonModule, ToolbarModule, CardModule, ItemListComponent, TableModule, ToastModule, DataViewModule]
})


export class HomeComponent implements OnInit {
  layout: 'list' | 'grid' = 'list';
  options = ['list','grid'];
  charactes: Character[] = [];

  constructor(private apiService: ApíService) { }

  ngOnInit(): void {

    this.apiService.getCharacter().subscribe((data) => {
      this.charactes = data;
      //console.log(`Body apiServices :: ${data}`);
    });
  }
}

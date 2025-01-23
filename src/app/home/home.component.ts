import { Component, OnInit } from '@angular/core';
import { ApíService } from '../services/apí.service';
import { Character } from '../data/ModelCharacter';
import { CommonModule } from '@angular/common';
import { AppMenu } from "../layout/component/app.menu";
import { AppTopbar } from '../layout/component/app.topbar';
import { AppSidebar } from '../layout/component/app.sidebar';
import { ListComponent } from "../list/list.component";


@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <div class="layout-wrapper">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main">
            <div class="grid grid-cols-12 gap-8">
              <div class="col-span-12 xl:col-span-6">
                <app-list [characters]="charactes"/>
              </div>
            </div>
            </div>
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div>
  `,imports: [CommonModule, AppTopbar, AppSidebar, ListComponent]
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

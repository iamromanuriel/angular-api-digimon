import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../../layout/component/app.menuitem';

@Component({
  selector: 'app-dnmenu',
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `
    <div class="layout-menu">
      <ng-container *ngFor="let item of model; let i = index" >
        <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>

      </ng-container>
    </div>
  `
})
export class DnmenuComponent implements OnInit{
  model: MenuItem[] = [];

  ngOnInit(): void {
      this.model = [
        {
          label: 'Home',
          items: [
          {label: 'List', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          {label: 'Character', icon: 'pi pi-fw pi-user', routerLink: ['/character'] },
          {label: 'Picture', icon: 'pi pi-fw pi-image', routerLink: ['/'] },
          {label: 'Other', icon: 'pi pi-fw pi-image', routerLink: ['/'] }
        ]
       }
      ]
  }
}

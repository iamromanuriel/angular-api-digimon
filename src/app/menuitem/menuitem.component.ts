import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from '../layout/service/layout.service';

@Component({
  selector: '[app-menuitem]',
  imports: [CommonModule, RouterModule, ],
  template: `
    <ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{item.label}}</div>
            <a *ngIf="(!item.routerLink || item.items) && item.visible !== false" [attr.href]="item.url"  [ngClass]="item.styleClass" [attr.target]="item.target" tabindex="0" pRipple>
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{item.label}}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <a
                *ngIf="item.routerLink && !item.items && item.visible !== false"
                [ngClass]="item.styleClass"
                routerLinkActive="active-route"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{item.label}}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <ul *ngIf="item.items && item.visible !== false" >
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
  `,

  providers: [LayoutService]
})
export class MenuitemComponent {
  @Input() item!: MenuItem;
  @Input() index!: number;

  @Input() @HostBinding('class.layout-menuitem') root!: boolean;
  //@Input() parentKey!: string

  active = false
  key: string = ""


}

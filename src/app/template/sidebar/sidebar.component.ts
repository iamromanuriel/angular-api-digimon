import { Component, ElementRef } from '@angular/core';
import { AppMenu } from '../../layout/component/app.menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
    <div class="layout-sidebar">

    </div>
  `
})
export class SidebarComponent {
  constructor(public el: ElementRef) {}
}

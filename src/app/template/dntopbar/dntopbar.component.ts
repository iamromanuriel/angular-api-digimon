import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../layout/service/layout.service';

@Component({
  selector: 'app-dntopbar',
  imports: [],
  template: ` <div class="layout-topbar">
  <div class="layout-topbar-logo-container">
      <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
          <i class="pi pi-bars"></i>
      </button>
      <a class="layout-topbar-logo" routerLink="/">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
        <path fill="#a3a3cd" d="M75,75V24c0-4.4-3.6-8-8-8H30c-2.8,0-5,2.2-5,5v55h49C74.6,76,75,75.6,75,75z"></path><path fill="#666aad" d="M41,76V16H30c-2.8,0-5,2.2-5,5v55H41z"></path><path fill="#fefdef" d="M72,79.5c0,2,1.3,3.9,3,4.5H29.5C27,84,25,82,25,79.5s2-4.5,4.5-4.5H75C73.3,75.6,72,77.5,72,79.5z"></path><g><path fill="#fcba7f" d="M48.5,13.5v31l-8-4l-8,4v-31H48.5z"></path></g><g><path fill="#1f212b" d="M75,85H29.5c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5H75c0.5,0,0.9,0.4,1,0.8c0.1,0.5-0.2,0.9-0.7,1.1 c-1.3,0.5-2.3,2-2.3,3.6s1,3.1,2.3,3.6c0.5,0.2,0.7,0.6,0.7,1.1C75.9,84.6,75.5,85,75,85z M29.5,76c-1.9,0-3.5,1.6-3.5,3.5 s1.6,3.5,3.5,3.5h42.6c-0.7-1-1.1-2.2-1.1-3.5s0.4-2.5,1.1-3.5H29.5z"></path><path fill="#1f212b" d="M71.5,79h-40c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h40c0.3,0,0.5,0.2,0.5,0.5S71.8,79,71.5,79z M71.5,81h-31 c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h31c0.3,0,0.5,0.2,0.5,0.5S71.8,81,71.5,81z M26,79.5h-2V21c0-3.3,2.7-6,6-6h2.5v2H30 c-2.2,0-4,1.8-4,4V79.5z M76,75h-2V24c0-3.9-3.1-7-7-7H48.5v-2H67c5,0,9,4,9,9V75z M40.5,60c-0.3,0-0.5-0.2-0.5-0.5v-19 c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v19C41,59.8,40.8,60,40.5,60z M40.5,65c-0.3,0-0.5-0.2-0.5-0.5v-2c0-0.3,0.2-0.5,0.5-0.5 s0.5,0.2,0.5,0.5v2C41,64.8,40.8,65,40.5,65z M40.5,68c-0.3,0-0.5-0.2-0.5-0.5v-1c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1 C41,67.8,40.8,68,40.5,68z"></path><path fill="#1f212b" d="M48.5,45c-0.1,0-0.2,0-0.2-0.1l-7.8-3.9l-7.8,3.9c-0.2,0.1-0.3,0.1-0.5,0c-0.1-0.1-0.2-0.3-0.2-0.4v-31 c0-0.3,0.2-0.5,0.5-0.5h16c0.3,0,0.5,0.2,0.5,0.5v31c0,0.2-0.1,0.3-0.2,0.4C48.7,45,48.6,45,48.5,45z M40.5,40c0.1,0,0.2,0,0.2,0.1 l7.3,3.6V14H33v29.7l7.3-3.6C40.3,40,40.4,40,40.5,40z"></path></g>
      </svg>
          <span>DIGIMON - Dex</span>
      </a>
  </div>

  `
})
export class DntopbarComponent {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService){}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
}
}

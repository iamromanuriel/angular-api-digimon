import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopbar } from '../../layout/component/app.topbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LayoutService } from '../../layout/service/layout.service';
import { Subscription, filter } from 'rxjs';
import { DntopbarComponent } from "../dntopbar/dntopbar.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppSidebar } from "../../layout/component/app.sidebar";



@Component({
  standalone: true,
  selector: 'app-home',
  template:  `
    <div class="layout-wrapper" [ngClass]="containerClass">
      <app-dntopbar/>
      <app-sidebar/>
      <div class="layout-main-container">
        <div class="layout-main">
        <router-outlet/>
        </div>
      </div>
    </div>

  `,imports: [CommonModule, RouterModule, DntopbarComponent, AppSidebar]
})


export class HomeComponent  {
  overlayMenuOpenSubscription: Subscription;
  menuOutsideClickListener: any;

  @ViewChild (SidebarComponent)appSidebar!: SidebarComponent;
  @ViewChild (AppTopbar) appTopBar!: AppTopbar;

  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router
  ){
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if(!this.menuOutsideClickListener){
          this.menuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
            if(this.isOutsideClicked(event)){
              this.hideMenu()
            }
          });

          if(this.layoutService.layoutState().staticMenuMobileActive){
            this.blockBodyScroll();
          }

      }});

      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.hideMenu();
      });

  }


  isOutsideClicked(event: MouseEvent){
    const sidebarE1 = document.querySelector('.layout-sidebar');
    const topbarE1 = document.querySelector('.layout-menu-button');
    const evenetTarget = event.target as Node;

    return !(sidebarE1?.isSameNode(evenetTarget) || sidebarE1?.contains(evenetTarget) || topbarE1?.isSameNode(evenetTarget) || topbarE1?.contains(evenetTarget))
  }

  hideMenu(){
    this.layoutService.layoutState.update((prev) => ({...prev, overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false}));
    if(this.menuOutsideClickListener){
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
        document.body.classList.add('blocked-scroll');
    } else {
        document.body.className += ' blocked-scroll';
    }
}

  unblockBodyScroll(): void{
    if(document.body.classList){
      document.body.classList.remove('blocked-scroll');
    }else{
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  get containerClass() {
    return {
        'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
        'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
        'layout-static-inactive': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',
        'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
        'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive
    };
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
        this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
        this.menuOutsideClickListener();
    }
  }

  /*
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
  */

}

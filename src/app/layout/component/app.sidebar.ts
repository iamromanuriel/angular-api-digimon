import { Component, ElementRef } from '@angular/core';
import { DnmenuComponent } from "../../template/dnmenu/dnmenu.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [DnmenuComponent],
    template: ` <div class="layout-sidebar">
        <app-dnmenu></app-dnmenu>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}

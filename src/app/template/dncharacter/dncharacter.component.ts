import { Component } from '@angular/core';

@Component({
  selector: 'app-dncharacter',
  imports: [],
  template: `
    <h1>{{characterTitle}}</h1>
  `
})
export class DncharacterComponent {
  characterTitle = "The charaacters"
}

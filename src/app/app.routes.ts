import { Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { ListComponent } from './template/list/list.component';
import { DncharacterComponent } from './template/dncharacter/dncharacter.component';
import { DnpictureComponent } from './template/dnpicture';
import { DnotherComponent } from './template/dnother';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
    {path:'', component: ListComponent },
    {path: 'character', component: DncharacterComponent},
    { path: 'picture', component: DnpictureComponent },
    { path: 'other', component: DnotherComponent }
  ]
  }
];

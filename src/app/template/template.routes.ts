import { Route, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DncharacterComponent } from "./dncharacter/dncharacter.component";

export default[
  { path: 'listComponent', data: { breadcrumb: 'List'}, component: ListComponent},
  { path: 'dnCharacter', data: { breadcrumb: 'Character'}, component: DncharacterComponent}
] as Routes;

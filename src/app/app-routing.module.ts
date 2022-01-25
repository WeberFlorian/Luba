import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from "./library/library.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

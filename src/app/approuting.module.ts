import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homecomponent';
import { AddSaloon } from './app.addsaloon';

import { SearchresultsComponent } from './searchresultscomponent';
import { SearchSaloon } from './app.searchsaloon';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'searchsaloon',
        pathMatch: 'full'
      },
      {
        path: 'searchsaloon',
        component: SearchSaloon
      },
      {
        path: 'addsaloon',
        component: AddSaloon
      },
     
      {
        path: 'saloon/:name',
        component: SearchresultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

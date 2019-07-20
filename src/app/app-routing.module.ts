/**
 * Created by thomas on 08/10/2017.
 */

import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { PagesService } from './pages.service';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { preload: true }
  },
  {
    path: ':slug',
    component: HomeComponent,
    data: { preload: true }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ PagesService ]
})
export class AppRoutingModule {}

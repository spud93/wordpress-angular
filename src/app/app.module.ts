import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { PagesService } from './pages.service';

@NgModule({

  declarations: [
    HomeComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PagesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

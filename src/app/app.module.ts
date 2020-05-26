import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MemeComponent } from './meme/meme.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 43694df... initial commit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

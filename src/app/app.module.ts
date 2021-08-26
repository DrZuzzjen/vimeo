import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RutinaComponent } from './rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    RutinaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

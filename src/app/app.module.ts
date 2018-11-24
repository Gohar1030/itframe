import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKsJb7Xujvy3lZfkkJXzxwbRiTmqGXk7M'
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

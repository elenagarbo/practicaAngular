import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImgComponent } from './img/img.component';
import { YouMapsComponent } from './you-maps/you-maps.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ImgComponent,
    YouMapsComponent
  ],
  imports: [
    BrowserModule
  ],
  //cargar solo los componentes que se quieren mostrar
  providers: [],
  bootstrap: [
    HeaderComponent,
    ImgComponent,
    YouMapsComponent,
    FooterComponent


  ]
  
})
export class AppModule { }

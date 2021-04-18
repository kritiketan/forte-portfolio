import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './public/notfound/notfound.component';
import { HeadernavComponent } from './public/headernav/headernav.component';
import { OnlineportalComponent } from './public/onlineportal/onlineportal.component'
import { ContactSectionComponent } from './public/contact-section/contact-section.component';

import { ParticlesComponent } from './public/particles/particles.component';
import { KittuComponent } from './public/kittu/kittu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeadernavComponent,
    OnlineportalComponent,
    ParticlesComponent,
    ContactSectionComponent,
    KittuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

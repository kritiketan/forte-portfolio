import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NotfoundComponent } from './public/notfound/notfound.component';
import { HeadernavComponent } from './public/headernav/headernav.component';
import { OnlineportalComponent } from './public/onlineportal/onlineportal.component'
import { ContactSectionComponent } from './public/contact-section/contact-section.component';
import { FormsModule } from '@angular/forms';
import { ParticlesComponent } from './public/particles/particles.component';
import { MinimalComponent } from './public/minimal/minimal.component';
import { ParticleDesignComponent } from './public/particle-design/particle-design.component';
import { CardsDesignComponent } from './public/cards-design/cards-design.component';
import { HalfdesignComponent } from './public/halfdesign/halfdesign.component';

import { HalfAppStyleComponent } from './public/half-app-style/half-app-style.component';
import { MystoryComponent } from './public/mystory/mystory.component';
import { FirechatComponent } from './public/applications/firechat/firechat.component';
import { FirebaseactionsService } from './services/firebase/firebaseactions.service';
import { HungryjerryComponent } from './public/applications/hungryjerry/hungryjerry.component';
import { SortsComponent } from './public/applications/sorts/sorts.component';
import { StackComponent } from './public/applications/stack/stack.component';

const firebaseConfig = {
  apiKey: "AIzaSyBZAZl3zHtiZM6TuhtSfMQkneGqrhIqb08",
  authDomain: "forte-react.firebaseapp.com",
  projectId: "forte-react",
  storageBucket: "forte-react.appspot.com",
  messagingSenderId: "270256770633",
  appId: "1:270256770633:web:d92000af929ca1ebc77998",
  measurementId: "G-3QSB5WPQVS"
};
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeadernavComponent,
    OnlineportalComponent,
    ParticlesComponent,
    ContactSectionComponent,
    MinimalComponent,
    ParticleDesignComponent,
    CardsDesignComponent,
    HalfdesignComponent,
    HalfAppStyleComponent,
    MystoryComponent,
    FirechatComponent,
    HungryjerryComponent,
    SortsComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [FirebaseactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

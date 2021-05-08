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
import { AppsComponent } from './public/apps/apps.component';
import { HalfAppStyleComponent } from './public/half-app-style/half-app-style.component';
import { MystoryComponent } from './public/mystory/mystory.component';
import { FirechatComponent } from './public/applications/firechat/firechat.component';
import { FirebaseactionsService } from './services/firebase/firebaseactions.service';

const firebaseConfig = {
  apiKey: "AIzaSyDkrm08aGGDSWUW2mjzo9LAohLssDFE9cE",
  authDomain: "forte-305505.firebaseapp.com",
  databaseURL: "https://forte-305505-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "forte-305505",
  storageBucket: "forte-305505.appspot.com",
  messagingSenderId: "618124719662",
  appId: "1:618124719662:web:33b0022e46283893d491bf",
  platformId:''
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
    AppsComponent,
    HalfAppStyleComponent,
    MystoryComponent,
    FirechatComponent
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

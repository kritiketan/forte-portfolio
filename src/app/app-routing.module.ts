import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineportalComponent } from './public/onlineportal/onlineportal.component';
import { NotfoundComponent } from './public/notfound/notfound.component';
import { MinimalComponent } from './public/minimal/minimal.component';
import { ParticleDesignComponent } from './public/particle-design/particle-design.component';
import { CardsDesignComponent } from './public/cards-design/cards-design.component';
import { HalfdesignComponent } from './public/halfdesign/halfdesign.component';
import { AppsComponent } from './public/apps/apps.component';
import { HalfAppStyleComponent } from './public/half-app-style/half-app-style.component'

const routes: Routes = [
  { path: '', component: HalfdesignComponent },
  { path:'parts',component:ParticleDesignComponent},
  { path:'cards',component:CardsDesignComponent},
  { path:'min',component:MinimalComponent},
  { path:'apps',component:AppsComponent},
  { path:'amu', component:HalfAppStyleComponent },
  { path: '404', component:  NotfoundComponent},
  // { path: ':slashUrl', component: OnlineportalComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

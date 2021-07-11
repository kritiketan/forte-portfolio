import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineportalComponent } from './public/onlineportal/onlineportal.component';
import { NotfoundComponent } from './public/notfound/notfound.component';
import { MinimalComponent } from './public/minimal/minimal.component';
import { ParticleDesignComponent } from './public/particle-design/particle-design.component';
import { CardsDesignComponent } from './public/cards-design/cards-design.component';
import { HalfdesignComponent } from './public/halfdesign/halfdesign.component';

import { HalfAppStyleComponent } from './public/half-app-style/half-app-style.component';
import { FirechatComponent } from './public/applications/firechat/firechat.component';
import { HungryjerryComponent } from './public/applications/hungryjerry/hungryjerry.component';
import { SortsComponent } from './public/applications/sorts/sorts.component';
import { StackComponent } from './public/applications/stack/stack.component';


const routes: Routes = [
  { path:'', component:HalfAppStyleComponent },
  { path: 'chat', component: FirechatComponent },
  { path: 'hungryJerry', component:  HungryjerryComponent},
  { path: 'sorts', component:  SortsComponent},
  { path: 'stack',component: StackComponent },
  { path: 'half', component: HalfdesignComponent },
  { path:'parts',component:ParticleDesignComponent},
  { path:'cards',component:CardsDesignComponent},
  { path:'min',component:MinimalComponent},
  { path: '404', component:  NotfoundComponent},
  { path: '',redirectTo:'',pathMatch:'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

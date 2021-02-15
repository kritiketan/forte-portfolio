import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineportalComponent } from './public/onlineportal/onlineportal.component';
import { NotfoundComponent } from './public/notfound/notfound.component';

const routes: Routes = [
  { path: '404', component:  NotfoundComponent},
  { path: ':slashUrl', component: OnlineportalComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

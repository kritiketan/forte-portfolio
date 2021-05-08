import { Component, OnInit } from '@angular/core';
import { FirebaseactionsService } from './../../../services/firebase/firebaseactions.service'
import { LocalStorageService } from '../../../services/localstorage/localstorage.service';


@Component({
  selector: 'app-firechat',
  templateUrl: './firechat.component.html',
  styleUrls: ['./firechat.component.css']
})


export class FirechatComponent implements OnInit {
  public isLoggedin:Boolean=false;
  public user:any={}
  constructor(
    private localStorageService:LocalStorageService,
    private firebaseActionsService:FirebaseactionsService
  ) {
      // this.getAuthenticatedUser();
   }

  ngOnInit(): void {
    
  }

  signinWithGoogle(){
    this.firebaseActionsService.googleLogin()
  }
  
  // getAuthenticatedUser(){
  //   this.user = this.angularFireAuth.authState.subscribe(user => {
  //     if(user){
  //       this.user = user;
  //       this.isLoggedin = true;
  //       this.localStorageService.set('user',JSON.stringify(this.user));
  //     }else{
  //       this.localStorageService.set('user',null);
        
  //     }
  //   })
  // }

}

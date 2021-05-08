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
    this.firebaseActionsService.getFireUserAuthState();
   }

  ngOnInit(): void {
    this.user = this.localStorageService.get('fireuser');
    if(this.user != ''){
      this.isLoggedin = true;
    }
  }

  signinWithGoogle(){
    this.firebaseActionsService.googleLogin().then(()=>{
        this.user = this.localStorageService.get('fireuser');
        this.isLoggedin = true;
    });
    
    
    
  }

  signOut(){
    this.firebaseActionsService.signOut()
  }

}

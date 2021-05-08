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
  public questions=[{
    question:"When you is your birthday?",
    answer:''
  },{
    question:"What was your bachelors major?",
    answer:''
  },{
    question:"What are you working on right now?",
    answer:''
  }];
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
    this.isLoggedin = false;
  }

}

import { Injectable } from '@angular/core';
import firebase  from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

import 'firebase/auth';
//use only for provider creation const auth = firebase.auth();
@Injectable({
  providedIn: 'root'
})
export class FirebaseactionsService {
  userData: any; // Save logged in user data
  constructor(public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router) { 

      /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      debugger
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', '');
      }
    })
  }

  googleLogin(){
    
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result)=>{
        
    })
    
  }

    
}

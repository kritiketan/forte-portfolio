import { Injectable } from '@angular/core';
import firebase  from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

import 'firebase/auth';
import { Observable } from 'rxjs';
//use only for provider creation const auth = firebase.auth();
@Injectable({
  providedIn: 'root'
})
export class FirebaseactionsService {
  userData: any; // Save logged in user data
  constructor(public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router) { }

  getFireUserAuthState(){
    return this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('fireuser', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('fireuser', '');
      }
    })
  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider).then((result)=>{
      localStorage.setItem('fireuser', JSON.stringify(result.user)); 
    })
    
  }

  signOut(){
    return firebase.auth().signOut();
  }

    
}

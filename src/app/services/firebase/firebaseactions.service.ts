import { Injectable } from '@angular/core';
import firebase  from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { LocalStorageService } from './../localstorage/localstorage.service';
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
    public router: Router,
    public localStorageService:LocalStorageService) { }

  getFireUserAuthState(){
    return this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;

        this.localStorageService.set('fireuser', this.userData);
      } else {
        this.localStorageService.set('fireuser', '');
      }
    })
  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider).then((result)=>{
      this.localStorageService.set('fireuser', result.user);
    })
    
  }

  signOut(){
    return firebase.auth().signOut();
  }

    
}

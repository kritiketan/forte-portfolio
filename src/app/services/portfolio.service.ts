import {Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import * as environment from '../../environments/environment';
import { LocalStorageService } from './localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private getUserProfileUrl = environment.environment.baseApiUrl + 'portfolio';
  constructor(
    private http:HttpClient,
    private localStorageService:LocalStorageService
  ) { }

  getUserProfile(data=''):Observable<any>{
    this.getUserProfileUrl+=data;
    return this.http.get(this.getUserProfileUrl)
    .pipe(
        tap(),
        catchError(this.handleError)
    )
  }

 getUserFromLS(){
  return this.localStorageService.get('currentUser');
  }

  saveUserToLS(data = ''):boolean{
    return this.localStorageService.set('currentUser',data);
  }

 private handleError(error: any){
  let errorMessage:string;
 if(error.error instanceof ErrorEvent){
     errorMessage = 'An error occuered '+ error.body.message;
 }else{
     //something else
 }
 console.error(error);
 return throwError(error);

}
}

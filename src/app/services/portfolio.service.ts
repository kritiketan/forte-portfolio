import {Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import * as environment from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private getUserProfileUrl = environment.environment.baseApiUrl + 'portfolio';
  constructor(
    private http:HttpClient
  ) { }

  logout():Observable<any>{
        
    return this.http.get(this.getUserProfileUrl)
    .pipe(
        tap(),
        catchError(this.handleError)
    )
 }

 private handleError(error: any){
  let errorMessage:string;
 if(error.error instanceof ErrorEvent){
     errorMessage = 'An error occuered '+ error.body.message;
 }else{
     //something else
 }
 console.error(error);
 return throwError(errorMessage);

}
}

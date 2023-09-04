import { Injectable } from '@angular/core';
import { user } from './Model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }
  
  registerUser(userObj : any ) : Observable<any>
  {
    return this.http.post<user>('http://localhost:8080/user/addUser' , userObj );

  }

  // getUserByemailid(emailid: any): user | undefined {
  //   return this.users.find(x => x.emailid == emailid);
  // }


  

  

}

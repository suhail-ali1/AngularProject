import { Injectable } from '@angular/core';
import { user } from './Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 
  private users :user[] = [
    { emailid: 'suhail@gmail.com', password : '123' }
  ]

  dashboardData : string[] =  [
    "Hii Welcome to DashBord . You have Successfully LoggedIn " , "Let Start with To-DO "
  ]

  getUserByemailid(emailid: any): user | undefined {
    return this.users.find(x => x.emailid == emailid);
  }
  
  getDashboard() : string[] | undefined
  {
    return this.dashboardData;
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ISRODATAService {

  constructor( private http:  HttpClient) { }

  getISRO_Data() : Observable<any> 
  {
    return this.http.get<any>('https://isro.vercel.app/api/spacecrafts');
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotivationalQuotesService {

  constructor(private http :HttpClient) { }

   
  getQuotes() : Observable<any>
  {
    return this.http.get("https://type.fit/api/quotes");

  }


}

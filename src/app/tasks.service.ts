import { Injectable } from '@angular/core';
import { task } from './Model/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks"
  }

  addTask(task : task) : Observable<task> {
    return this.http.post<task>(this.serviceURL,task);
  }

  getAllTask() : Observable<task[]> {
    return this.http.get<task[]>(this.serviceURL);
  }

  deleteTask(task : task) : Observable<task> {
    return this.http.delete<task>(this.serviceURL+'/'+task.id);
  }

  editTask(task : task) : Observable<task> {
    return this.http.put<task>(this.serviceURL+'/'+task.id,task);
  }

}

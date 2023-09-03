import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { task } from '../Model/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasktype : any;
  tasks : task[] = [];
  enabledit : boolean = false;
  buttonname = "Enable Edit"
  taskobj : task = new task();
  addTaskValue : string = '';
  
  constructor(private route : ActivatedRoute , private service : TasksService ){}

  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params) => {
        this.tasktype = params['type'];
      }
    )
    this.getAllTasks();
  }
   
 
  enablingedit()
  {
      this.enabledit = !this.enabledit;
        
      if(this.buttonname === "Enable Edit")
      {
        this.buttonname = "Disable Edit"
      }
      else
      {
        this.buttonname = "Enable Edit"
      }
       

  }



  getAllTasks()
  {
       this.service.getAllTask().subscribe(
        (data) => {
           this.tasks = data ;
        }
       ) 
  }

  addTask()
  {
       this.taskobj.taskname = this.addTaskValue;
    this.service.addTask(this.taskobj).subscribe(
      (res) => 
      {
        this.ngOnInit();
      }
    )
  }










}

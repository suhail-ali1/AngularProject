import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

 {path: "login" , component: LoginComponent },
 {path: "register" , component: RegisterComponent },
 {path: "dashboard" , component : DashboardComponent , children : [
     
    {path : '' , redirectTo : 'home' , pathMatch : 'full' } ,
    {path : 'home' , component : HomeComponent } ,
    {path : 'task/:type' , component : TasksComponent}
     

 ]},
 {path: "" , redirectTo : "login" , pathMatch: 'full'   } ,
 {path : "todaytask" , component : TasksComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

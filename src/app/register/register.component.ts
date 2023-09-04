import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from '../Model/user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 userObj : user = new user();

 constructor(private service : DataService)
 {}

  registrationForm =  new FormGroup(
      {
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile : new FormControl('', Validators.required),
      DOB : new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
  )

  onSubmit() {
    
      console.log(this.registrationForm.value);
      this.service.registerUser(this.registrationForm.value).subscribe(
        (res) => {
          console.log(res);
        } , err => {
           console.log(err);
        });
      
      // this.userObj.DOB = this.registrationForm.get('DOB').value;
      // this.userObj.email
      // this.userObj.firstname
      // this.userObj.lastname
      // this.userObj.mobile
      // this.userObj.password
    
  }



 
  }


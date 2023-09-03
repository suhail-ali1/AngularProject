import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm =  new FormGroup(
      {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone : new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
  )

  onSubmit() {
    
      console.log(this.registrationForm.value);
    
  }



 
  }


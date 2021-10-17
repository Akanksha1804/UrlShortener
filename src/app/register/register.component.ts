import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  constructor(private userService:UserService,private router : Router) { 
    this.registerForm = new FormGroup({
      'uemail' : new FormControl('',Validators.required),
      'upass' : new FormControl('',Validators.required),
      'ucpass' : new FormControl('', Validators.required),
      'udob' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    Object.keys(this.registerForm.controls).forEach(field => {
      const control = this.registerForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.userService.saveUser(this.registerForm.value).subscribe(() => {
        console.log("exc");
        this.router.navigate(['/dashboard']);
      },() => {
        alert("Something went wrong")
      })
      
    }
  }

}

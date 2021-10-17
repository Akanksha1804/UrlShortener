import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Ulog, User } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  

  constructor(private userService : UserService, private router : Router) { 
    this.loginForm = new FormGroup({
      'uemail' : new FormControl('',Validators.required),
      'upass' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      //console.log(this.loginForm.value);
      /*this.userService.getUser(this.loginForm.value.uemail,this.loginForm.value.upass).subscribe((data : User) => {
        //this.router.navigate(['/student-list'])
        console.log(data);
      
        if(Object.keys(data).length !==0){
          if(this.loginForm.value.upass === data.upass){
            console.log("successfully logged in");
          }
          else{
            console.log("Invalid password");
          }

        }
        else{
          console.log("error");
        }
      },() => {
        alert("Something went wrong")
      })*/
      if(this.loginForm.valid){
        console.log(this.loginForm.value);
        this.userService.saveUser(this.loginForm.value).subscribe(() => {
          console.log("exc");
          this.router.navigate(['/dashboard']);
        },() => {
          alert("Something went wrong")
        })
        
      }
    }
  }

}

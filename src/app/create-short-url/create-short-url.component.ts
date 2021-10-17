import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { url } from '../model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-short-url',
  templateUrl: './create-short-url.component.html',
  styleUrls: ['./create-short-url.component.css']
})
export class CreateShortUrlComponent implements OnInit {

  urlForm : any;

  constructor(private userService:UserService,private router : Router) { 
    this.urlForm = new FormGroup({
      'longUrl' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    
  }

  generate(length : number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }

  saveUrl(){
    let short = this.generate(4);
    this.userService.saveUrls(this.urlForm.value.longUrl,short).subscribe(() => {
      console.log("exc");
      this.router.navigate(["/dashboard"]);
    }),()=>{
      alert("Something went wrong")
    }
  }

}

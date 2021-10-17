import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { urls } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlList : Array<any>=[];
  id : number = 0;
  

  constructor(private activeRoute: ActivatedRoute,private userService : UserService, private router : Router) { 
    this.userService.getUrls().subscribe((data:any) => {
      console.log(data);
      this.urlList = data;
    })
  }

  ngOnInit( ): void {
    
  }

  updateClicks(id : number , short : string, long : string, clicks : number){
    console.log("came to click function");
    console.log(id);
    this.userService.changeClicks(id,short,long,clicks).subscribe(()=>{
      console.log("updated");
      this.userService.getUrls().subscribe(()=>{
        console.log("service cmpltd");
        document.location.href = long;
      }) 
    })

  }

}

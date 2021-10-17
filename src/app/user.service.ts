import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User,Ulog, urls } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  obj : urls = {
    short : "",
    long : "",
    clicks : 0
  }

  userData : Array<User> = []
  constructor(private http:HttpClient) { }

  saveUser(user : User){
    //this.userData.push(user);
    return this.http.post(`https://61658cbbcb73ea00176420bd.mockapi.io/urlusers`,user)
  }

  getUser(uemail:string,upass : string){
    return this.http.get<User>(`https://61658cbbcb73ea00176420bd.mockapi.io/urlusers?uemail=${uemail}&upass=${upass}`)
  }

  saveUrls( long : string, short : string){
    this.obj.short = short;
    this.obj.long = long;
    this.obj.clicks = 0;
    console.log(this.obj);
    return this.http.post(`https://61658cbbcb73ea00176420bd.mockapi.io/url`,this.obj);
  }

  getUrls(){
    return this.http.get(`https://61658cbbcb73ea00176420bd.mockapi.io/url`)
  }

  changeClicks( id : number , short : string , long : string,clicks : number){
    this.obj.short = short;
    this.obj.long = long;
    this.obj.clicks = clicks;
    this.obj.clicks=this.obj.clicks+1;

    return this.http.put(`https://61658cbbcb73ea00176420bd.mockapi.io/url/${id}`,this.obj);
  }
}

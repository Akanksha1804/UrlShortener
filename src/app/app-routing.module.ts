import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShortUrlComponent } from './create-short-url/create-short-url.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "createshorturl",
    component : CreateShortUrlComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

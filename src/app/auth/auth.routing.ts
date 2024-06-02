import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routs:Routes =[
    {path:'register',  component: RegisterComponent},
    {path:'login',     component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routs)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }

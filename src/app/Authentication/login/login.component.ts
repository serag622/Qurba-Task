import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Shared/Service/auth/auth-services.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  isSummiting: boolean = false;
  errorMsg: string=''

  constructor(
   private authService: AuthService,
   private formBuilder: FormBuilder,
   private Router : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  //init form properties
  initForm(){
    this.loginFormGroup = this.formBuilder.group({
      username:[null, Validators.required],
      password:[null, Validators.required],
    })

  }

  //return controlls of the form
  public get loginControl(){
    return this.loginFormGroup.controls
  }

  login(){
    this.isSummiting=true;
    if(this.loginFormGroup.invalid)
    {
      return;
    }

    this.authService.UserLogin(this.loginFormGroup.value).subscribe(res => {
      console.log(res)
    }, err => {
      this.errorMsg='you entered invalid username or password';
      setTimeout(() =>{
        this.errorMsg=''
      },5000)
    })
  }


}

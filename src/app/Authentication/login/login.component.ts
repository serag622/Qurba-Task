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

  constructor(
   private authService: AuthService,
   private formBuilder: FormBuilder,
   private Router : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.loginControl)
  }

  //init form properties
  initForm(){
    this.loginFormGroup = this.formBuilder.group({
      email:[null, Validators.required],
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
    let form = new FormData() ;
    form.append('username', this.loginFormGroup.get('email')?.value);
    form.append('password', this.loginFormGroup.get('password')?.value);

    this.authService.UserLogin(form).subscribe((rea :any)=>{
      console.log(rea)
      this.isSummiting=false;

    }, (err)=>{
      console.log(err)
    })
  }


}

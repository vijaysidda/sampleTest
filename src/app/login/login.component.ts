import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails:any;
  loginForm: FormGroup | any;
  resultData:any;
  submitted:boolean = false;
  constructor(private fb:FormBuilder,private route:Router,private api:ApiService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobilenumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })

  }

  get formValidates() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem('auth',JSON.stringify({email:this.loginForm.value.email}))
      this.route.navigate(['layout/dashboard'])
  } else {
    return
  }
  }

  

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mobileRegex = /^[7-9][0-9]{0,10}$/;
  login = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  
  });

  constructor( private router: Router, ) {
    }
  ngOnInit() {
   
    }
    
  submit(){
    this.router.navigateByUrl('admin/dashboard');
  }
  logIn() {
    console.log(this.login.value);
    this.router.navigateByUrl('admin/dashboard')
    }
  get name() {
    return this.login.get('name');
  }
  get email() {
    return this.login.get('email');
  }
  Register(){
    this.router.navigateByUrl('auth/signup');
  }
}

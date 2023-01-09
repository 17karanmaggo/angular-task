import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: any;
  constructor( private router: Router, ) {
    }
  ngOnInit() {
    this.login = {
    
      email: '',
      password: '',
    }
    }
  submit(){
    this.router.navigate(['/dashboard']);
  }
}

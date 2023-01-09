import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: any;
  constructor( private router: Router, ) {
    }
  ngOnInit() {
    this.signup = {
      
      name:'',
      email: '',
      mobileno:'',
      createpassword: '',
      confirmpassword:''

    }
    }
  submit(){
    this.router.navigate(['/login']);
  }
}

import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthApiService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpInfo: any;

  mobileRegex = /^[7-9][0-9]{0,10}$/;
  signup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [
      Validators.required,
      
      Validators.pattern(this.mobileRegex),      
    ]),
    batchno: new FormControl('', [Validators.required,]),
    // cpass: new FormControl('', Validators.required),
    // confirmpass: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private authService:AuthApiService, private toastr: ToastrService ) {}
  ngOnInit() {
    this.signUpInfo = {
      name: '',
      mobileno: '',
      email: '',
      batchno: '',
    };
  }
  // submit(){
  //   this.router.navigateByUrl('auth/login');
  // }
  // submit() {
   
   
  // }
  getControl(name: any): AbstractControl | null {
    return this.signup.get(name);
  }
  signUp() {
    console.log(this.signup);
    if (this.signup.valid) {
      // if form is valid
      let body = {
        "email": this.signUpInfo.email,
        "name": this.signUpInfo.name,
        "mobile_number": '+91' + this.signUpInfo.mobileno,
        "batch_number": this.signUpInfo.batchno,

      }
  
      this.authService.signUp(body).subscribe((res) => {
        if (res.success) {
          this.toastr.success("Registration success, please verify with OTP");
          this.router.navigateByUrl('auth/login')
        }
        else {
          this.toastr.error("Something went wrong, Please try again!");
        }
      },
      )
    }
    
    }
  get name() {
    return this.signup.get('name');
  }
  get email() {
    return this.signup.get('email');
  }
  get number() {
    return this.signup.get('number');
  }
  get batchno() {
    return this.signup.get('batchno');
  }
}

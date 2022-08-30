import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;

  constructor(private route: Router) {
    this.login = new FormGroup({
      'loginId': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ])
    });
  }

  ngOnInit(): void {
    const id = 'test@test.com';
    const pass = 'test123';
    let data = {
      'loginId': id,
      'password': pass
    }
    console.log("login details =>", data);

    this.login.get('loginId')?.setValue(data['loginId']);
    this.login.get('password')?.setValue(data['password']);
  }

  OnSaveData() {
    //this.submitted = true;
    if (this.login.invalid) {
      return;
    }

    console.log(JSON.stringify(this.login.value));
    this.route.navigate(['/product']);

  }
  onReset() {
    this.submitted = false;
    this.login.reset();
  }
}

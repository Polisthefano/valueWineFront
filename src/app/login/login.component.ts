import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  f: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  });
  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit() { }
  redirect() {
    this.router.navigate(['registro']);
  }
  login() {
    console.log(this.f.value);
    this.mainService.login()
  }
}

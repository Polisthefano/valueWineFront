import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean
  f: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  });
  constructor(private toastService: ToastService, private router: Router, private mainService: MainService) { }

  ngOnInit() { }
  redirect(path: string) {
    this.router.navigate([path]);
  }
  ngOnDestroy(): void {
    this.f.reset()
  }
  login() {
    this.isLoading = true
    if (this.f.invalid) {
      return
    }
    let bodyRequest = { "email": this.f.value.email, "password": this.f.value.pass }
    this.mainService.login(bodyRequest).then(resp => {
      this.mainService.sessionStorageSet('user', resp)
      this.toastService.presentToast('Usuario logueado Correctamente', 'toastSucess').then(resp => {
      })
      this.isLoading = false
      this.redirect('pages')
    })
  }
}

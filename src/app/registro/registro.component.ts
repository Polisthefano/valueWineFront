import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  isLoading: boolean = false
  f: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    rol: new FormControl(),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  });
  constructor(private router: Router, private mainService: MainService, public toastService: ToastService) { }

  ngOnInit() { }
  redirectToLogin() {
    this.router.navigate(['login']);
  }
  createAccount() {
    this.isLoading = true
    if (this.f.invalid) {
      this.isLoading = false
      return;
    }
    let bodyRequest = { 'nombre': this.f.value.name, 'direccion': this.f.value.address, 'rol': this.f.value.rol, 'telefono': this.f.value.phone, 'email': this.f.value.email, 'password': this.f.value.pass }
    this.mainService.createAccount(bodyRequest).then(resp => {
      this.toastService.presentToast('Usuario Creado Correctamente', 'toastSucess').then(resp => {
      })
      this.isLoading = false
      this.redirectToLogin()
    }).catch(err => {
      console.error(err);
      this.isLoading = false
      this.toastService.presentToast(`${err.error.msg}`, 'toastError').then(resp => {
      })
    })
  }
}

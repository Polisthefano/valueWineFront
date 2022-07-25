import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Vino } from 'src/app/models/vino.model';
import { ToastService } from 'src/app/services/toast.service';
import { VinoService } from 'src/app/services/vino.service';


@Component({
  selector: 'app-AgregarEditarVinoComponent',
  templateUrl: './AgregarEditarVino.html',
  styleUrls: ['./modal.component.scss'],
})

export class AgregarEditarVinoComponent implements OnInit {
  sub: Subscription = new Subscription()
  vinoAEditar: Vino
  idVinoAEditar: number
  f: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tipoVino: new FormControl('', [Validators.required]),
    VolatileAcidity: new FormControl('', [Validators.required]),
    FixedAcidity: new FormControl('', [Validators.required]),
    CitricAcid: new FormControl('', [Validators.required]),
    Residualsugar: new FormControl('', [Validators.required]),
    FreeSulfurDioxide: new FormControl('', [Validators.required]),
    Chlorides: new FormControl('', [Validators.required]),
    Density: new FormControl('', [Validators.required]),
    TotalSulfurDioxide: new FormControl('', [Validators.required]),
    PH: new FormControl('', [Validators.required]),
    Sulphates: new FormControl('', [Validators.required]),
    Alcohol: new FormControl('', [Validators.required])
  })
  isLoading: boolean = false
  constructor(private router: Router, private route: ActivatedRoute, private vinoService: VinoService, private toastService: ToastService) {
    this.idVinoAEditar = this.route.snapshot.params?.id
  }

  ngOnInit(): void {

  }
  ionViewWillEnter() {
    if (this.idVinoAEditar) {
      this.vinoService.getVinosByIdProductor(JSON.parse(sessionStorage.getItem('user')), this.idVinoAEditar).then((vino: Vino) => {
        this.vinoAEditar = vino
        this.f.get('name').setValue(this.vinoAEditar.Nombre)
      }).catch(err => {
        console.error('Error al encontrar el vino a editar', err);
        this.backPage()

      })
    }
  }

  ionViewWillLeave() { //on destroy de ionic
    this.sub.unsubscribe()
  }

  submit() {
    this.isLoading = true
    this.createVino()

  }
  createVino() {
    if (this.f.invalid) {
      return;
    }
    let body: {
      "nombre": string, "VolatileAcidity": number, "FixedAcidity": number,
      "CitricAcid": number, "Residualsugar": number, "FreeSulfurDioxide": number, "Chlorides": number
      , "Density": number, "TotalSulfurDioxide": number, "PH": number, "Sulphates": number,
      "Alcohol": number, "idProductor": number, "Redwine": boolean
    } = {
      nombre: this.f.value.name, VolatileAcidity: this.f.value.VolatileAcidity, FixedAcidity: this.f.value.FixedAcidity,
      CitricAcid: this.f.value.CitricAcid, Residualsugar: this.f.value.Residualsugar, FreeSulfurDioxide: this.f.value.FreeSulfurDioxide,
      Chlorides: this.f.value.Chlorides, Density: this.f.value.Density, TotalSulfurDioxide: this.f.value.TotalSulfurDioxide,
      PH: this.f.value.PH, Sulphates: this.f.value.Sulphates, Alcohol: this.f.value.Alcohol, idProductor: 0, Redwine: this.f.value.tipoVino == 'true' ? true : false
    }
    this.vinoService.setVino(body).then(resp => {
      this.toastService.presentToast('Vino creado Correctamente', 'toastSucess')
      this.backPage()
    }).catch(err => {
      let msg = ''
      if (err.error.code == 401) {
        msg = 'Sesion expirada'
        this.router.navigate(['login'])
      } else {
        msg = 'Error al crear el vino'
        this.backPage()
      }
      this.toastService.presentToast(msg, 'toastError').then(resp => { })

    })
  }
  backPage() {
    this.router.navigateByUrl('pages/vinos', { replaceUrl: true })
  }
}

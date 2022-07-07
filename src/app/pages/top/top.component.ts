import { Component, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino.model';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  vinos: Array<Vino>
  constructor(private vinoService: VinoService) { }

  ngOnInit() {
    this.vinoService.getAllVinos().then((resp: any) => {
      this.vinos = resp.vinos
    }).catch(err => {
      console.error('Error al traer todos los vinos', err);
    })
  }


}

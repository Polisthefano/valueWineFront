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

  }
  ionViewWillEnter() { //on Init de ionic
    this.vinoService.getAllVinos().then((resp: { vinos: Vino[] }) => {
      this.vinos = resp.vinos.filter(v => v.Quality).sort((a, b) => {
        if (a.Quality > b.Quality) {
          return -1
        } else if (a.Quality < b.Quality) {
          return 1
        } else {
          return 0
        }
      })
    }).catch(err => {
      console.error('Error al traer todos los vinos', err);
    })
  }

}

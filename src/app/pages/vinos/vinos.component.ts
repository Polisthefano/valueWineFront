import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.scss'],
})
export class VinosComponent implements OnInit {
  vinos = ['Vino 1 ', 'Vino 3', 'Vino 5 ', 'Vino 2 ']
  constructor() { }

  ngOnInit() { }

}

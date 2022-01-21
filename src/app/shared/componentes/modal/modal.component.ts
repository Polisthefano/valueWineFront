import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() abrirModal: boolean
  @Output() closeModal: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() { }

  cerrarModal() {
    this.abrirModal = false
    this.closeModal.emit()
  }
}

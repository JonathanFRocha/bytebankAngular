import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class novaTransferenciaComponent {
  public valor!: number;
  public destino!: string;
  constructor() {}

  transferir() {
    console.log('solicitado nova transferencia');
    console.log('valor: ' + this.valor);
    console.log('destino' + this.destino);
  }
}

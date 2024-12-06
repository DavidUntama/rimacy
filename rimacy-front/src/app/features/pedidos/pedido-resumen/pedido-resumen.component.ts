import { Component, inject, Input } from '@angular/core';
import { PenCurrencyPipe } from '../../../pipes/penCurrencyPipe';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PedidoFormService } from '../../../services/pedido-form.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'pedido-resumen',
  standalone: true,
  imports: [PenCurrencyPipe, JsonPipe, ReactiveFormsModule],
  templateUrl: './pedido-resumen.component.html',
  styleUrl: './pedido-resumen.component.css',
})
export class PedidoResumenComponent {
  tipoDcto: FormControl = new FormControl('0');
  valorDcto: FormControl = new FormControl(0);

  total: number = 0;

  frmPedSrv = inject(PedidoFormService);
  frm = this.frmPedSrv.frmPedido;

  constructor() {
    this.frmPedSrv.importe?.setValue(50);
  }
  calcularDescuento() {
    let dcto = 0;
    switch (this.tipoDcto.value) {
      case '1':
        dcto = this.frmPedSrv.importe.value * (this.valorDcto.value / 100); //porcentaje
        break;
      case '2':
        dcto = this.valorDcto.value; //monto fijo
        break;
      default:
        dcto = 0;
        break;
    }
    this.frmPedSrv.descuento?.setValue(dcto);
    this.total = this.frmPedSrv.importe.value - dcto;
  }
}

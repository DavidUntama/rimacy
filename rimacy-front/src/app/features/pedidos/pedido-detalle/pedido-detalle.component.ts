import { Component } from '@angular/core';
import { PenCurrencyPipe } from '../../../pipes/penCurrencyPipe';

@Component({
  selector: 'pedido-detalle',
  standalone: true,
  imports: [PenCurrencyPipe],
  templateUrl: './pedido-detalle.component.html',
  styleUrl: './pedido-detalle.component.css'
})
export class PedidoDetalleComponent {

}

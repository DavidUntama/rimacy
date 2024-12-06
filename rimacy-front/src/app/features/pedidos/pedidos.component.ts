import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { ClienteDTO } from '../../models/clienteDTO';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PenCurrencyPipe } from '../../pipes/penCurrencyPipe';
import { PedidoDatosComponent } from './pedido-datos/pedido-datos.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';
import { PedidoResumenComponent } from './pedido-resumen/pedido-resumen.component';
import { PedidoFormService } from '../../services/pedido-form.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    PedidoDatosComponent,
    PedidoDetalleComponent,
    PedidoResumenComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  private fb = inject(FormBuilder);

  private frmPedSrv = inject(PedidoFormService);
 
  public pedidoForm = this.frmPedSrv.frmPedido;

  get datosForm(): FormGroup {
    return this.pedidoForm// as FormGroup;
  }
}

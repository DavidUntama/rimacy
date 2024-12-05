import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { ClienteDTO } from '../../models/clienteDTO';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PenCurrencyPipe } from '../../pipes/penCurrencyPipe';
import { PedidoDatosComponent } from './pedido-datos/pedido-datos.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';
import { PedidoResumenComponent } from './pedido-resumen/pedido-resumen.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [PedidoDatosComponent, PedidoDetalleComponent, PedidoResumenComponent, CommonModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {

  tipoDescuento: string = 'sinDescuento';
  descuentoPorcentaje: number = 0;
  descuentoCantidadFija: number = 0;
  onTipoDescuentoChange() {
    // Resetear el valor del descuento cuando se cambia el tipo this.descuentoPorcentaje = 0; this.descuentoCantidadFija = 0; }
  }
}

import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { Cliente } from '../../models/cliente';
import { ClienteDTO } from '../../models/clienteDTO';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [SearchBoxComponent, CurrencyPipe, DatePipe],
  providers: [DatePipe],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
onSearch($event: Event) {
throw new Error('Method not implemented.');
}
onDelete(_t33: any) {
throw new Error('Method not implemented.');
}
onEdit(_t33: any) {
throw new Error('Method not implemented.');
}
onSubmit() {
throw new Error('Method not implemented.');
}
addProduct() {
throw new Error('Method not implemented.');
}
removeProduct(_t101: any) {
throw new Error('Method not implemented.');
}
resetForm() {
throw new Error('Method not implemented.');
}
calculateTotal: any;
verificarNumeroGuia($event: Event) {
throw new Error('Method not implemented.');
}
onDescuentoChange($event: Event) {
throw new Error('Method not implemented.');
}
subtotal: any;
descuento: any;
total: any;
calcularTotal() {
throw new Error('Method not implemented.');
}
  public cliResult!: ClienteDTO;

  public handleSearch(value: ClienteDTO): void{
    this.cliResult = value;
    console.log(`cliente buscado: ${this.cliResult.nombres}`)
  }
}

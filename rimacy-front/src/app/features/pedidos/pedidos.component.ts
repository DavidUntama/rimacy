import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  public cliResult!: Cliente;

  public handleSearch(value: Cliente): void{
    this.cliResult = value;
    console.log(`cliente buscado: ${this.cliResult.nombres}`)
  }
}

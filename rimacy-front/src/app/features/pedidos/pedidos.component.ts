import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  public strResult: string = '';

  public handleSearch(value: string): void{
    this.strResult = value;
    console.log(`cliente buscado: ${this.strResult}`)
  }
}

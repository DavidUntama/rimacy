import { Component, inject } from '@angular/core';
import { PenCurrencyPipe } from '../../../pipes/penCurrencyPipe';
import { AutocompleteComponent } from '../../../components/autocomplete/autocomplete.component';
import { itemsDTO } from '../../../models/ItemsDTO';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'pedido-detalle',
  standalone: true,
  imports: [PenCurrencyPipe, AutocompleteComponent],
  templateUrl: './pedido-detalle.component.html',
  styleUrl: './pedido-detalle.component.css'
})
export class PedidoDetalleComponent {
  prodsSrv = inject(ProductosService);

  items: itemsDTO[] = [];
  ngOnInit(): void {
    this.prodsSrv.getProductos().subscribe({
      next: (data) => {
        data.map((prod) => {
          this.items.push({ id: prod.id, nombre: prod.denominacion });
        });
      },
      error: (error) => {
        console.error(error);
      },
    })
  }
}

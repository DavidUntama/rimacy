import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../components/search-box/search-box.component';
import { ClienteDTO } from '../../../models/clienteDTO';
import { AutocompleteComponent } from '../../../components/autocomplete/autocomplete.component';
import { itemsDTO } from '../../../models/ItemsDTO';

@Component({
  selector: 'pedido-datos',
  standalone: true,
  imports: [SearchBoxComponent, AutocompleteComponent],
  templateUrl: './pedido-datos.component.html',
  styleUrl: './pedido-datos.component.css',
})
export class PedidoDatosComponent {
  handleSearch($event: ClienteDTO) {
    //  throw new Error('Method not implemented.');
  }

  items: itemsDTO[] = [
    { id: 1, nombre: 'naranjas' },
    { id: 2, nombre: 'manzanas' },
    { id: 3, nombre: 'piñas' },
    { id: 4, nombre: 'naranjones' },
    { id: 5, nombre: 'bananas' },
    { id: 6, nombre: 'peras' },
    { id: 7, nombre: 'ciruelas' },
    { id: 8, nombre: 'kiwis' },
    { id: 9, nombre: 'melocotones' },
    { id: 10, nombre: 'albaricoques' },
    { id: 11, nombre: 'uvas' },
    { id: 12, nombre: 'fresas' },
    { id: 13, nombre: 'arándanos' },
    { id: 14, nombre: 'mangos' },
    { id: 15, nombre: 'papayas' },
    { id: 16, nombre: 'sandías' },
    { id: 17, nombre: 'limones' },
    { id: 18, nombre: 'cerezas' },
    { id: 19, nombre: 'granadas' },
    { id: 20, nombre: 'mandarinas' },
  ];
  onItemSelected(itemId: number) { 
    console.log('Item seleccionado:', itemId);
  }
}

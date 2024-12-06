import { Component, inject, Input } from '@angular/core';
import { SearchBoxComponent } from '../../../components/search-box/search-box.component';
import { ClienteDTO } from '../../../models/clienteDTO';
import { AutocompleteComponent } from '../../../components/autocomplete/autocomplete.component';
import { itemsDTO } from '../../../models/ItemsDTO';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PedidoFormService } from '../../../services/pedido-form.service';
import { ColaboradoresService } from '../../../services/colaboradores.service';

@Component({
  selector: 'pedido-datos',
  standalone: true,
  imports: [SearchBoxComponent, AutocompleteComponent, ReactiveFormsModule],
  templateUrl: './pedido-datos.component.html',
  styleUrl: './pedido-datos.component.css',
})
export class PedidoDatosComponent {
  private frmPedSrv = inject(PedidoFormService);
  private colaboradoresService = inject(ColaboradoresService);

  frm = this.frmPedSrv.frmPedido;

  onCienteSelected($event: ClienteDTO) {
    this.frmPedSrv.idCliente?.setValue($event.id);
  }
  //recuperar items del servicio de colaboradores
  items: itemsDTO[] = [];

  onVendedorSelected(itemId: number) {
    this.frmPedSrv.idColaborador?.setValue(itemId);
  }
  ngOnInit(): void {
    this.colaboradoresService.getColaboradores().subscribe({
      next: (colaboradores) => {
        colaboradores.map((colaborador) => {
          this.items.push({ id: colaborador.id, nombre: colaborador.nombres + ' ' + colaborador.apellidos });
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

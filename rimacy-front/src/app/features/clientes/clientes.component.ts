import { Component, inject } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [RouterModule, ClientesFormComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  private service = inject(ClientesService);
  private modal: any;

  public titulo = 'Gestión de Clientes';
  public clientes: Array<Cliente> = [];
  public cliente: Cliente = {} as Cliente;
  public idx: number = -1;

  ngOnInit(): void {
    this.getAll();
    const elem = document.getElementById('clienteModal');
    this.modal = new (window as any).bootstrap.Modal(elem);
  }

  private getAll(): void {
    this.service.getClientes().subscribe({
      next: (data) => (this.clientes = data),
      error: (e) => alert(e),
    });
  }
  public openModal(i: number) {
    this.idx = i;
    this.cliente = i > -1 ? this.clientes[i] : this.setBlankCliente();
    this.modal.show();
  }
  public closeModal(cliente: Cliente): void {
    if (this.idx > -1) this.clientes[this.idx] = cliente;
    else this.clientes.push(cliente);
    this.modal.hide();
  }

  public delete(i: number) {
    if (confirm('¿Seguro?')) {
      this.service.delete(this.clientes[i].id).subscribe({
        next: () => this.clientes.splice(i, 1),
        error: (e) => alert(e),
      });
    }
  }

  setBlankCliente(): Cliente {
    return {
      id: 0,
      nombres: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      ruc: '',
      email: '',
      ruta: '',
      clienteTipo: null,
    };
  }
}

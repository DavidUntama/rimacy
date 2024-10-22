import { Component, inject } from '@angular/core';
import { ClienteTipo } from '../../models/clienteTipo';
import { ClienteTipoService } from '../../services/cliente-tipo.service';
import { ClienteTipoFormComponent } from './cliente-tipo-form/cliente-tipo-form.component';

@Component({
  selector: 'app-cliente-tipo',
  standalone: true,
  imports: [ClienteTipoFormComponent],
  templateUrl: './cliente-tipo.component.html',
  styleUrl: './cliente-tipo.component.css',
})
export class ClienteTipoComponent {
  public titulo = 'Gestión de Tipos de Clientes';
  public clienteTipos: Array<ClienteTipo> = [];

  private service = inject(ClienteTipoService);
  private modal: any;
  public idx: number = -1;
  public clienteTipo!: ClienteTipo;

  ngOnInit(): void {
    this.loadData();
    const elem = document.getElementById('clienteTipoModal');
    this.modal = new (window as any).bootstrap.Modal(elem);
  }

  openModal(i: number): void {
    this.idx = i;
    this.clienteTipo = i > -1 ? this.clienteTipos[i] : { id: 0, nombre: '' };
    this.modal.show();
  }

  closeModal(clienteTipo: ClienteTipo): void {
    if (this.idx > -1) this.clienteTipos[this.idx] = clienteTipo;
    else this.clienteTipos.push(clienteTipo);
    this.modal.hide();
  }

  delete(idx: number): void {
    if (confirm("¿Seguro?")){
      this.service.delete(this.clienteTipos[idx].id).subscribe({
        next: () => this.clienteTipos.splice(idx, 1),
        error: (e) => alert(e)        
      })
    }
  }

  loadData(): void {
    this.service.getClienteTipos().subscribe({
      next: (data) => {
        this.clienteTipos = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { UnidadesService } from '../../services/unidades.service';
import { Unidad } from '../../models/unidad';
import { UnidadesFormComponent } from './unidades-form/unidades-form.component';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [UnidadesFormComponent],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.css',
})
export class UnidadesComponent {
  public titulo = 'Gestión de Unidades';
  public idx: number = -1;
  public unidades: Array<Unidad> = [];
  public unidad: Unidad = {} as Unidad;

  private service = inject(UnidadesService);
  private modal: any;

  ngOnInit(): void {
    this.service.getUnidades().subscribe({
      next: (data) => {
        this.unidades = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
    const elem = document.getElementById('unidadesModal');
    this.modal = new (window as any).bootstrap.Modal(elem);
  }

  openModal(idx: number): void {
    this.idx = idx;
    this.unidad = idx > -1 ? this.unidades[idx] : { id: 0, nombre: '', cantidad: 0 };
    this.modal.show();
  }

  onCloseModal(Unidad: Unidad) {
    if (this.idx > -1) {
      this.unidades[this.idx] = Unidad;
    }else{
      this.unidades.push(Unidad);
    }
    this.modal.hide();
  }

  delete(idx: number) {
    if (!confirm('Estas seguro?')) return;
    let id = this.unidades[idx].id;
    this.service.delete(id).subscribe({
      next: (data) => { 
        alert('Eliminado'); 
        this.unidades.splice(idx, 1);
      },
      error: (error) => { alert(error); },
    });
  }
}

import { Component, inject } from '@angular/core';
import { Colaborador } from '../../models/colaborador';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { ColFormComponent } from './col-form/col-form.component';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ColFormComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
})
export class ColaboradoresComponent {
  public titulo = 'Gestión de Colaboradores';
  public colaboradores: Array<Colaborador> = [];
  private service = inject(ColaboradoresService);
  public currColaborador!: Colaborador;
  private idx: number = -1;
  private modal:any;

  ngOnInit(): void {
    this.getAllColaboradores();
    const elem = document.getElementById('colaboradorModal');
    this.modal = new (window as any).bootstrap.Modal(elem);
  }

  openModal(idx: number): void {    
    this.idx = idx;
    this.currColaborador =
      idx > -1 ? this.colaboradores[idx] : this.setBlankCurrColaborador();
      
      this.modal.show();      
  }

  onCloseModal() {    
    this.modal.hide();
  }
  onSavedChanges(colaborador: Colaborador) {
    
    if (this.idx > -1) {
      this.colaboradores[this.idx] = colaborador;
    } else {
      this.colaboradores.push(colaborador);
    }
  }

  //utils
  getAllColaboradores() {
    this.service.getColaboradores().subscribe({
      next: (data) => {
        this.colaboradores = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  setBlankCurrColaborador(): Colaborador {
    return {
      id: 0,
      nombres: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      email: '',
      ruc: '',
      puesto: '',
      sueldo: 0,
    };
  }
}

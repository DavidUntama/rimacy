import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { Colaborador } from '../../../models/colaborador';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ColaboradoresService } from '../../../services/colaboradores.service';


@Component({
  selector: 'app-col-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './col-form.component.html',
  styleUrl: './col-form.component.css',
})
export class ColFormComponent {
  @Input()
  public colaborador!: Colaborador;
  @Output()
  public colaboradorOut = new EventEmitter<Colaborador>();
  @Output()
  public closeModal = new EventEmitter<void>();

  private service = inject(ColaboradoresService);
  private fb = inject(FormBuilder);

  public frmColaborador = this.fb.group({            
    nombres: 'gjdfg',
    apellidos: '',
    direccion: '',
    telefono: '',
    email: '',
    ruc: '',
    puesto: '',
    sueldo: 0,
  });

  ngOnChanges(changes: SimpleChanges): void {    
    this.frmColaborador.patchValue(changes['colaborador'].currentValue);
  }

  onClickSave(): void {    
    const col: Colaborador  = this.frmColaborador.value as Colaborador;
    col.id = this.colaborador.id
    this.service.save(col).subscribe({
      next: (colaboradorSaved) => {        
        this.colaboradorOut.emit(colaboradorSaved);
      },
      error: (error) => {
        alert(error);
      }
    })
    this.closeModal.emit();    
  }
}

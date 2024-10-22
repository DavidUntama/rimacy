import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { UnidadesService } from '../../../services/unidades.service';
import { Unidad } from '../../../models/unidad';

@Component({
  selector: 'app-unidades-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './unidades-form.component.html',
  styleUrl: './unidades-form.component.css',
})
export class UnidadesFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(UnidadesService);

  @Input() public unidadObj = {} as Unidad;
  @Output() public closeModal = new EventEmitter<Unidad>();

  public frmUnidad = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
    cantidad: [0, Validators.required],
  });

  public onClickSave() {
    if (this.frmUnidad.invalid) {
      return;
    }
    this.service.save(this.frmUnidad.value as Unidad).subscribe({
      next: (data) => {
        alert('Guardado');
        this.closeModal.emit(data);
      },
      error: (error) => {
        alert(error);
      },
    })
  }
  ngOnChanges(changes: SimpleChanges): void {        
    this.frmUnidad.patchValue(this.unidadObj);    
  }
}

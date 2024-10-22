import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Unidad } from '../../../models/unidad';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UnidadesService } from '../../../services/unidades.service';
import { Producto } from '../../../models/producto';
import { JsonPipe } from '@angular/common';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-productos-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './productos-form.component.html',
  styleUrl: './productos-form.component.css',
})
export class ProductosFormComponent {
  private srvUnidades = inject(UnidadesService);
  private srvProductos = inject(ProductosService);
  private fb = inject(FormBuilder);

  public unidadesBase: Unidad[] = [];
  public frmProducto = this.fb.group({
    id: [0],
    denominacion: [''],
    marca: [''],
    tipo: [''],
    presentacion: [''],
    precio: [0],
    stock: [0],
    foto: [''],
    descripcion: [''],
    activo: [true],
    orden: [0],
    unidadBase: [{ id: 0, nombre: '' }, Validators.required],
  });

  @Output()
  public closeModal = new EventEmitter<Producto>();
  @Input()
  public objProducto!: Producto;

  ngOnInit(): void {
    this.getUnidadesBase();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.frmProducto.patchValue(this.objProducto);
  }

  compareClienteTipo(o1: Unidad, o2: Unidad): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
  private getUnidadesBase(): void {
    this.srvUnidades.getUnidadesBase().subscribe({
      next: (d) => {
        this.unidadesBase = d;
      },
      error: (e) => {
        alert(e);
      },
    });
  }

  public onSaveClick(): void {
    if (this.frmProducto.valid) {
      this.srvProductos
        .saveProducto(this.frmProducto.value as Producto)
        .subscribe({
          next: (p) => {
            alert('Producto guardado: ' + p.marca);
            this.closeModal.emit(p);
          },
          error: (e) => alert('error ' + e),
        });
    }
  }
}

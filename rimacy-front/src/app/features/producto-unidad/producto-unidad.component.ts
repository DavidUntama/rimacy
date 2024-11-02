import { Component, inject } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UnidadesService } from '../../services/unidades.service';
import { Unidad } from '../../models/unidad';
import { ProductosUnidadesService } from '../../services/productosUnidades.service';
import { ProductoUnidad } from '../../models/producto-unidad';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-unidad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-unidad.component.html',
  styleUrl: './producto-unidad.component.css',
})
export class ProductoUnidadComponent {
  public productos: Array<Producto> = [];
  public unidades: Array<Unidad> = [];
  public unidsOfIdProd: Array<ProductoUnidad> = [];

  private srvProd = inject(ProductosService);
  private srvUnid = inject(UnidadesService);
  private srvUniPro = inject(ProductosUnidadesService);

  private fb = inject(FormBuilder);
  public frm = this.fb.group({
    id: [0],
    producto: [null, Validators.required],
    unidad: [null, Validators.required],
  });

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.srvProd.getProductos().subscribe({
      next: (prods) => (this.productos = prods),
      error: () => alert('Error al recuperar productos'),
    });
    this.srvUnid.getUnidadesNoBase().subscribe({
      next: (unids) => (this.unidades = unids),
      error: () => alert('Error al recuparar unidades'),
    });
  }
  public getUnits(): void {
    const prod: Producto = this.frm.get('producto')?.value || ({} as Producto);
    if (prod) {
      this.srvUniPro.getUnidadesByIdProducto(prod.id).subscribe({
        next: (data) => (this.unidsOfIdProd = data),
        error: () => alert('error'),
      });
    }
  }
  public add(e: Event): void {
    e.preventDefault();
    if (this.frm.invalid) return;
    const prod: Producto = this.frm.get('producto')?.value || ({} as Producto);
    const unid: Unidad = this.frm.get('unidad')?.value || ({} as Unidad);
    const prod_unid: ProductoUnidad = {
      id: 0,
      producto: prod,
      unidad: unid,
    };
    const exists = this.unidsOfIdProd.some(
      (pu) => pu.producto.id === prod.id && pu.unidad.id === unid.id
    );
    if (exists) {
      alert('Ya existe');
      return;
    }

    this.srvUniPro.save(prod_unid).subscribe({
      next: (id) => {
        alert('Registro almacenado');
        prod_unid.id = id;
        this.unidsOfIdProd.push(prod_unid);
      },
      error: () => alert('Error'),
    });
  }
  public remove(i: number): void {
    const id = this.unidsOfIdProd[i].id;
    if (confirm('¿Seguro?')) {
      this.srvUniPro.deleteById(id).subscribe({
        next: () => {
          alert('Eliminado con éxito');
          this.unidsOfIdProd.splice(i, 1);
        },
        error: () => alert('Error al eliminar'),
      });
    }
  }
}

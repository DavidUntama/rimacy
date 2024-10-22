import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { ClientesFormComponent } from '../clientes/clientes-form/clientes-form.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductosFormComponent, ClientesFormComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  public titulo = 'Gestión de Productos';
  public productos: Array<Producto> = [];
  public producto!: Producto;
  public idx: number = -1;

  private srvProductos = inject(ProductosService);
  private modal: any;

  public ngOnInit(): void {
    this.getProductos();
    const elem = document.getElementById('modalProducto');
    this.modal = new (window as any).bootstrap.Modal(elem);
  }

  private getProductos(): void {
    this.srvProductos.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  public openModal(i: number): void {
    this.idx = i;
    this.producto = i > -1 ? this.productos[i] : this.setBlankProducto();
    this.modal.show();
  }
  public closeModal(prod: Producto): void {
    if (this.idx > -1) this.productos[this.idx] = prod;
    else this.productos.push(prod);

    this.modal.hide();
  }

  private setBlankProducto(): Producto {
    return {
      id: 0,
      denominacion: '',
      marca: '',
      tipo: '',
      presentacion: '',
      precio: 0,
      stock: 0,
      foto: '',
      descripcion: '',
      activo: true,
      orden: 0,
      unidadBase: null,
    };
  }
}

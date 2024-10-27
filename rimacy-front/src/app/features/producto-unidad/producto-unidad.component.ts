import { Component, inject } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';
import { ReactiveFormsModule } from '@angular/forms';
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
  private srvUniPro = inject(ProductosUnidadesService)

  ngOnInit(): void {
    this.getData();
  }

  private getData():void{
    this.srvProd.getProductos().subscribe({
      next: (prods) => (this.productos = prods),
      error: () => alert('Error al recuperar productos'),
    });
    this.srvUnid.getUnidadesNoBase().subscribe({
      next: (unids) => this.unidades=unids,
      error: () => alert('Error al recuparar unidades')
    })
  }
  public getUnits(idProd:string):void{
    const id = parseInt(idProd);
    if(id == 0 ) {
      this.unidsOfIdProd=[];
      return;
    }
    this.srvUniPro.getUnidadesByIdProducto(id).subscribe({
      next: (data) => this.unidsOfIdProd=data,
      error: () => alert('error') 
    })
  }
  public add(e: Event):void{
    e.preventDefault();
    alert('hi')
  }
}

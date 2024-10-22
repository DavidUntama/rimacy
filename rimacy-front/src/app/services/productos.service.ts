import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url = Settings.API_ROOT + 'productos';
  private http = inject(HttpClient);

  public getProductos(): Observable<Array<Producto>> {
    return this.http.get<Array<Producto>>(this.url);
  }
  public saveProducto(p: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, p);
  }
}

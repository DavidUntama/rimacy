import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Settings } from '../settings';
import { Observable } from 'rxjs';
import { ProductoUnidad } from '../models/producto-unidad';

@Injectable({ providedIn: 'root' })
export class ProductosUnidadesService {
  private http = inject(HttpClient);
  private url = Settings.API_ROOT + 'prod-uni';

  public getUnidadesByIdProducto(id: number): Observable<Array<ProductoUnidad>> {
    return this.http.get<Array<ProductoUnidad>>(`${this.url}/byProd/${id}`);
  }
  public save(pu: ProductoUnidad): Observable<number>{
    return this.http.post<number>(`${this.url}`, pu);
  }
  public deleteById(id: Number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}

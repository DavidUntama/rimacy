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
  public saveUnitByIdProd(pu: ProductoUnidad): Observable<void>{
    return this.http.post<void>(`${this.url}`, pu);
  }
}

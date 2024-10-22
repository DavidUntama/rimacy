import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from '../settings';
import { Unidad } from '../models/unidad';

@Injectable({ providedIn: 'root' })
export class UnidadesService {
  private url = Settings.API_ROOT + 'unidades';
  private http = inject(HttpClient);

  public getUnidades(): Observable<Array<Unidad>> {
    return this.http.get<Array<Unidad>>(`${this.url}/all`);
  }

  public getUnidadesBase(): Observable<Array<Unidad>> {
    return this.http.get<Array<Unidad>>(`${this.url}/base`);
  }

  public getUnidad(id: number): Observable<Unidad> {
    return this.http.get<Unidad>(`${this.url}/${id}`);
  }

  public save(unidad: Unidad): Observable<Unidad> {
    return this.http.post<Unidad>(this.url, unidad);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

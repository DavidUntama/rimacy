import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  private url = Settings.API_ROOT + 'colaboradores';
  private http = inject(HttpClient);

  public getColaboradores(): Observable<Array<Colaborador>> {
    return this.http.get<Array<Colaborador>>(this.url); 
  }

  public getColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.url}/${id}`);
  }

  public save(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.url, colaborador);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
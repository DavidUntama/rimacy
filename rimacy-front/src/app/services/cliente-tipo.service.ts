import { inject, Injectable } from '@angular/core';
import { Settings } from '../settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteTipo } from '../models/clienteTipo';

@Injectable({
  providedIn: 'root'
})
export class ClienteTipoService {
  
  private url = Settings.API_ROOT + 'clientes_tipo';
  private http = inject(HttpClient)

  getClienteTipos(): Observable<Array<ClienteTipo>> {
    return this.http.get<Array<ClienteTipo>>(this.url);
  }

  getClienteTipo(id: number): Observable<ClienteTipo> {
    return this.http.get<ClienteTipo>(`${this.url}/${id}`);
  }

  save(clienteTipo: ClienteTipo): Observable<ClienteTipo> {
    return this.http.post<ClienteTipo>(this.url, clienteTipo);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
}

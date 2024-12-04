import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Settings } from '../settings';
import { ClienteDTO } from '../models/clienteDTO';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private url = Settings.API_ROOT + "clientes";
  private http = inject(HttpClient);

  public getClientes(): Observable<Array<Cliente>> {
    return this.http.get<Array<Cliente>>(this.url).pipe(
      map( (clientes: Array<Cliente>) => clientes.map((cliente:Cliente) =>{
        if ( 'pedidos' in cliente ){
          delete cliente.pedidos;
        }
        return cliente;
      }))
    ); 
  }
  public getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`); 
  }

  public getSuggs(s: string): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(`${this.url}/search/${s}`)
  }

  public save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}




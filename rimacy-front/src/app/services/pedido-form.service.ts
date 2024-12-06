import { inject, Injectable } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PedidoFormService {
  private fb = inject(FormBuilder);

  private fecha1 = new Date();
  private fecha2 = new Date(this.fecha1.getTime() + 86400000);  // Sumar un día en milisegundos

  private fechaHoy = this.fecha1.toISOString().substring(0, 10);   
  private fechaSig = this.fecha2.toISOString().substring(0, 10); 
  
  public frmPedido = this.fb .group({
    id: [0],
    nroGuia: ['', [Validators.required]],
    idCliente: [0, [Validators.required]],
    idColaborador: [0, [Validators.required]],
    fechaPed: [this.fechaHoy, [Validators.required]],
    fechaEnt: [this.fechaSig, [Validators.required]],    
    importe: [0, [Validators.required]],
    descuento: [0, [Validators.required]],
    contado: [true, [Validators.required]],
  })
  get nroGuia() { return this.frmPedido.get('nroGuia') as FormControl; }
  get idCliente() { return this.frmPedido.get('idCliente'); }
  get idColaborador() { return this.frmPedido.get('idColaborador'); }
  get fechaPed() { return this.frmPedido.get('fechaPed'); }
  get fechaEnt() { return this.frmPedido.get('fechaEnt'); }
  get importe() { return this.frmPedido.get('importe') as FormControl; }
  get descuento() { return this.frmPedido.get('descuento') as FormControl; }
  get contado() { return this.frmPedido.get('contado'); }
}

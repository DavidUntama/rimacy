import { CommonModule, JsonPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../models/cliente';
import { ClienteTipoService } from '../../../services/cliente-tipo.service';
import { ClienteTipo } from '../../../models/clienteTipo';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css',
})
export class ClientesFormComponent {
  private srvCliente = inject(ClientesService);
  private srvClienteTipo = inject(ClienteTipoService);
  private fb = inject(FormBuilder);
  public tipos: Array<ClienteTipo> = [];

  public frmCliente = this.fb.group({
    id: [0],
    nombres: ['',Validators.required],
    apellidos: [''],
    direccion: [''],
    telefono: [''],
    email: [''],
    ruc: [''],
    ruta: [''],
    clienteTipo: [{ id: 1, nombre: '' }, Validators.required],
    // clienteTipo: [null, Validators.required],
  });

  @Input()
  public clienteObj!: Cliente;

  @Output()
  public closeModal = new EventEmitter<Cliente>();

  ngOnInit(): void {
    this.getAllTipo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.frmCliente.patchValue(this.clienteObj);
    console.log(this.clienteObj);
  }

  public onClickSave() {
    if (this.frmCliente.valid) {
      this.srvCliente.save(this.frmCliente.value as Cliente).subscribe({
        next: (d) => this.closeModal.emit(d),
        error: (e) => alert(e),
      })
    }
  }

  private getAllTipo(): void {
    this.srvClienteTipo.getClienteTipos().subscribe({
      next: (d) => (this.tipos = d),
      error: (e) => alert(e),
    });
  }

  compareClienteTipo(o1: ClienteTipo, o2: ClienteTipo): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}

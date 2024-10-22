import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ClienteTipo } from '../../../models/clienteTipo';
import { ClienteTipoService } from '../../../services/cliente-tipo.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cliente-tipo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-tipo-form.component.html',
  styleUrl: './cliente-tipo-form.component.css',
})
export class ClienteTipoFormComponent {
  private service = inject(ClienteTipoService);

  @Input()
  public clienteTipoObj = {} as ClienteTipo;
  @Output()
  public closeModal = new EventEmitter<ClienteTipo>();

  private fb: FormBuilder = inject(FormBuilder);
  public frmTipo = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
  });

  public onClickSave(): void {
    if (this.frmTipo.invalid) return;
    this.service.save(this.frmTipo.value as ClienteTipo).subscribe({
      next: (d) => {
        this.closeModal.emit(d);
        alert("Guardado")
      },
      error: (e) => {
        alert(e);
      },
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.frmTipo.patchValue(this.clienteTipoObj);
  }
}

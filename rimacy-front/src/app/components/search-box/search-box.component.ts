import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, map, switchMap } from 'rxjs';
import { Settings } from '../../settings';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente';
import { ClienteDTO } from '../../models/clienteDTO';

@Component({
  selector: 'search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  private clientesSrv = inject(ClientesService);

  public sugerencias: ClienteDTO[] = [];

  @Input()
  public placeHolder: string = '';

  @Output()
  public onDebounce = new EventEmitter<ClienteDTO>();

  public selectedIndex: number = -1;

  public onKeyPress(value: string, event: KeyboardEvent): void {
    const key = event.key;
    const ignoredKeys = [
      'Control',
      'Alt',
      'Shift',
      'CapsLock',
      'Escape',
      'Tab',
      'Meta',
    ];

    if (ignoredKeys.includes(key) || event.key.startsWith('F')) {
      return;
    }

    if (event.key === 'ArrowDown') {
      if (this.selectedIndex < this.sugerencias.length - 1) {
        this.selectedIndex++;
        this.updateInputWithSelected();
      }
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex--;
      if (this.selectedIndex < -1) this.selectedIndex = -1;
      this.updateInputWithSelected();
    } else if (event.key === 'Enter') {
      if (this.selectedIndex >= 0) this.selectSuggestion(this.selectedIndex);
    } else {
      this.debouncer.next(value);
      this.selectedIndex = -1;
    }
  }

  private updateInputWithSelected(): void {
    const selectedSuggestion = this.sugerencias[this.selectedIndex];
    if (selectedSuggestion) {
      const inputElement = document.getElementById(
        'txtInput'
      ) as HTMLInputElement;
     inputElement.value = selectedSuggestion.nombres +' '+ selectedSuggestion.apellidos;
    }
  }

  public selectSuggestion(idx: number): void {
    this.selectedIndex = idx;
    this.updateInputWithSelected();
    this.onDebounce.emit(this.sugerencias[idx]); //emitir al padre el cliente
    this.sugerencias = [];
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(Settings.DELAY_INPUT))
      .subscribe((sugs) => {
        if (sugs.length == 0) { this.sugerencias = [];  return};
        this.clientesSrv.getSuggs(sugs).subscribe({
          next: (v)=> this.sugerencias=v,
          error: ()=>alert('Error en clientes suggests')
        })
      })
  }

  private normalizeString(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}

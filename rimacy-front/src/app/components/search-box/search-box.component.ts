import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, map, switchMap } from 'rxjs';
import { Settings } from '../../settings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();

  public clientes: string[] = [
    'Juan Pérez',
    'María González',
    'Carlos Ruiz',
    'Ana López',
    'David Sánchez',
  ];
  public sugerencias: string[] = [];

  @Input()
  public placeHolder: string = '';

  @Output()
  public onDebounce = new EventEmitter<string>();

  public selectedIndex: number = -1;

  public keyListener(value: string, event: KeyboardEvent): void {
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
      inputElement.value = selectedSuggestion;
    }
  }

  public selectSuggestion(idx: number): void {
    this.selectedIndex = idx;
    this.updateInputWithSelected();
    this.onDebounce.emit(this.sugerencias[idx]);
    this.sugerencias = [];
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300),
        map((value) => value.toLowerCase()),
        switchMap((value) => {
          this.sugerencias = this.clientes.filter((cliente) =>
            // cliente.toLowerCase().includes(value)
            this.normalizeString(cliente).includes(this.normalizeString(value))
          );
          return this.sugerencias;
        })
      )
      .subscribe();
  }

  private normalizeString(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}

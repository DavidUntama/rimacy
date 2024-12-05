import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { itemsDTO } from '../../models/ItemsDTO';

@Component({
  selector: 'autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css',
})
export class AutocompleteComponent implements OnInit {
  @Input() items: itemsDTO[] = [];
  @Input() placeHolder: string = '';
  @Output() itemSelectedId = new EventEmitter<number>();

  @ViewChildren('itemElement') itemElements!: QueryList<ElementRef>;

  filteredItems: itemsDTO[] = [];
  searchTerm: string = '';
  showList: boolean = false;
  selectedIndex: number = 0;

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  onFocus() {
    this.showList = true;
  }

  onBlur() {
    this.showList = false;
    this.updateInputWithSelected();
    this.emitir();
  }
  private emitir(): void {
    if (this.filteredItems.length > 0)
      this.itemSelectedId.emit(this.filteredItems[this.selectedIndex].id);
  }

  onSearchTermChange() {
    this.filteredItems = this.items.filter((item) =>
      item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.selectedIndex = 0;
  }

  public onKeyPress(event: KeyboardEvent): void {
    const key = event.key;
    const ignoredKeys = ['Control', 'Alt', 'Shift', 'CapsLock', 'Tab', 'Meta'];
    const funtionalKeys = ['ArrowDown', 'ArrowUp', 'Enter'];

    if (
      ignoredKeys.includes(key) ||
      event.key.startsWith('F') ||
      !funtionalKeys.includes(key)
    ) {
      return;
    }
    if (event.key === 'ArrowDown') {
      if (this.selectedIndex < this.filteredItems.length - 1) {
        this.selectedIndex++;
        this.updateInputWithSelected();
        this.scrollToView();
      }
    } else if (event.key === 'ArrowUp') {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
        this.updateInputWithSelected();
        this.scrollToView();
      }
    } else if (event.key === 'Enter') {
      this.updateInputWithSelected();
      this.emitir();
      this.filteredItems = [];
      this.selectedIndex = 0;
    }
  }
  private updateInputWithSelected(): void {
    const selectedSuggestion = this.filteredItems[this.selectedIndex];

    if (selectedSuggestion) {
      this.searchTerm = selectedSuggestion.nombre;
    }
  }
  private scrollToView(): void {
    const itemElement = this.itemElements.toArray()[this.selectedIndex];
    if (itemElement) {
      itemElement.nativeElement.scrollIntoView({ block: 'nearest' });
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'penCurrency',
  standalone: true 
})

export class PenCurrencyPipe implements PipeTransform {
  transform(value: number | null): string {
    if (value === null) return '';
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(value);
  }
}

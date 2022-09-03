import { Product } from '../products';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Le décorateur @component de la classe indique que c'est un component
@Component({
  selector: 'app-product-alerts', // Identifie le component
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  // Quand la valeur de notify change ça va faire un EventEmitter
  @Output() notify = new EventEmitter();
}

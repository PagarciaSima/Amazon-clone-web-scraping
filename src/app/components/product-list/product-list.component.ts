import { Component, Input } from '@angular/core';
import { ProductResponse } from '../../models/scraping-response';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input()
  title: string = '';
  @Input()
  products: ProductResponse[] = [];
}

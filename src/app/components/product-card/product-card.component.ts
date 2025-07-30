import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProductResponse } from '../../models/scraping-response';
import { TooltipModule } from 'primeng/tooltip';
import { Button } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-product-card',
  imports: [
    CardModule,
    TooltipModule,
    Button,
    RatingModule,
    FormsModule,
    MessageModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input()
  product: ProductResponse = {};

  wrapTitle(title: string | undefined) {
    if (title && title.length > 17) {
      return title.substring(0, 17) + '...';
    }
    return title;
  }
}

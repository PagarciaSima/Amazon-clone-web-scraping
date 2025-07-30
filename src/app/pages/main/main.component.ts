import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../../services/scraping-service';
import { ToolbarModule } from 'primeng/toolbar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ScrapingResponse } from '../../models/scraping-response';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-main',
  imports: [
    ToolbarModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    FormsModule,
    ProductListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  loading: boolean = false;
  searchQuery: string = '';
  searchResult: ScrapingResponse | undefined = undefined;

  constructor(
    private scrapingService: ScrapingService
  ) {

  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.loading = true;
    this.searchResult = undefined;
    this.scrapingService.searchAmazon(this.searchQuery).subscribe({
      next: (res) => {
        this.searchResult = res;
        this.loading = false;
      }, error: (err) => {
        console.error(err);
        this.loading = false;
      }
    })
  }
}

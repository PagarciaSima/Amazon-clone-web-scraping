import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../../services/scraping-service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  constructor(
    private scrapingService: ScrapingService
  ) {

  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.scrapingService.searchAmazon('laptop').subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}

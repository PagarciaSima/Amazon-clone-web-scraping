import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../../services/scraping-service';
import { ToolbarModule } from 'primeng/toolbar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main',
  imports: [
    ToolbarModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  loading: boolean = false;

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

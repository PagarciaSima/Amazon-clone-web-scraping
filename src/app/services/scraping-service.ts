import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrapingService {

    private apiUrl: string = 'https://scraper-api.decodo.com/v2/scrape';
    private apiKey: string = 'VTAwMDAyOTI0ODY6UFdfMWVlMzNkNTcwYmNhMTFlZTU4MGU2ZDAxMjRlNTkxZjQ2';

    constructor(private http: HttpClient) {

    }

    searchAmazon(query: string) {
        const headers: HttpHeaders = new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': `BASIC ${this.apiKey}`,
            'Content-type': 'application/json'
        });
        const body = {
            target: 'amazon_search',
            query,
            domain: 'com',
            page_from: '1',
            parse: true
        }
        return this.http.post<any>(this.apiUrl, body, { headers });
    }
}
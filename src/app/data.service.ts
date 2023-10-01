import { Injectable } from '@angular/core';
import { ResponseInterface } from './card-interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  cardsPerPage: number = 6
  mainUrl = "http://newsapi.org/v2/top-headlines?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb"
  everythingUrl = "https://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb"

  fetchData(pageNumber: number = 1, categoryName: string = '', cardsPerPage?: number): Observable<ResponseInterface> {

    console.log('categoryName', categoryName, categoryName)

    var options = new HttpParams().
      set('page', pageNumber)
      .set('pageSize', cardsPerPage ?? this.cardsPerPage)
      .set('category', categoryName)

    return this.http.get<ResponseInterface>(this.mainUrl, { params: options })
  }

  fetchAllData(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(this.mainUrl)
  }

  getPageLength(results: number): number {
    return results / this.cardsPerPage
  }
}

import { Component } from '@angular/core';
import { CardInterface } from '../card-interface';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  cards: CardInterface[] = []
  allCardsData: CardInterface[] = []
  totalResults: number = 0
  currentPage: number = 1
  categories: string[] = ['', 'Business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  cardsPerPage: number = 0

  ngOnInit(): void {
    this.getCardData(this.currentPage)
    // this.getAllCards()

  }

  getCardData(pageNumber: number, categoryName: string = '') {
    console.log('getCardData', pageNumber, categoryName)
    try {
      this.dataService.fetchData(pageNumber, categoryName).subscribe({
        next: (data: any) => {
          console.log('fetchedData', data)
          this.allCardsData = [...data.articles]
          this.cards = data.articles
          this.totalResults = data.totalResults
        },
        error: (err: Error) => {
          console.error(err);
        }

      })
    }
    catch (error) {
      console.error(error);
    }
  }

  // getAllCards() {
  //   this.dataService.fetchAllData().subscribe({
  //     next: (data: any) => {
  //       console.log('fetchedData', data)
  //       this.allCardsData = [...data.articles]
  //       this.cards = data.articles
  //       this.totalResults = data.totalResults
  //     },
  //     error: (err: Error) => {
  //       console.error(err);
  //     }

  //   })
  // }

  filterByName(value: string): void {
    console.log('filterByName value', value)

    var queryparamValue = value.length ? value : null
    console.log('filterByName value', value, queryparamValue)
    this.router.navigate(['/'], {
      queryParams: { search: queryparamValue }, queryParamsHandling: "merge"
    });

    let newData = this.allCardsData.filter((card) => (card.source.name.toLowerCase()).startsWith(value.toLowerCase()))
    console.log('filterByName', value, newData)
    this.cards = [...newData]

  }

  onPageChange(event: string) {
    console.log('onPageChange', event)
    this.currentPage = parseInt(event)
    this.getCardData(this.currentPage)

  }

  getCardsPerPage(): number {
    return this.dataService.cardsPerPage
  }
}

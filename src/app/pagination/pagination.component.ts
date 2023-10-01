import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  constructor(private router: Router) { }

  @Input() page!: number;
  @Input() cardsPerPage!: number
  @Input() totalResults!: number
  @Output() onPageChange = new EventEmitter<string>();


  selectPage(pageNum: string) {
    this.router.navigate(['/'], {
      queryParams: { page: pageNum }, queryParamsHandling: "merge"
    });
    this.onPageChange.emit(pageNum)

  }

}

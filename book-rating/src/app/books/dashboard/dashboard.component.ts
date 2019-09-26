import { Component, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  // ACHTUNG: ergibt einen Bug, sobald wir Ajax einführen!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private rs: BookRatingService,
              private bs: BookStoreService) {

  }

  ngOnInit() {
    this.bs.getAll().subscribe(books => this.books = books);
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  doCreateBook(book: Book) {
    this.books = [...this.books, book];
  }
}

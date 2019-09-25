import { Component, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  // ACHTUNG: ergibt einen Bug, sobald wir Ajax einführen!
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) {

  }

  ngOnInit() {
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5
      },
      {
        isbn: '222',
        title: 'AngularJS',
        description: 'Altes Buch',
        rating: 5
      },
      {
        isbn: '333',
        title: 'React',
        description: 'Mehhh....',
        rating: 3
      }

    ];
  }

  doRateUp(book: Book) {
    // const ratedBook = this.rs.rateUp(book);
    const ratedBook = {
      ... book,
      rating: book.rating + 1
    };
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
}

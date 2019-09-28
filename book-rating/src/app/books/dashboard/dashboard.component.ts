import { Component, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { loadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  constructor(private store: Store<State>) {

  }

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }

  doRateUp(book: Book) {
    // const ratedBook = this.rs.rateUp(book);
    // this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.rs.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreateBook(book: Book) {
    // this.books = [...this.books, book];
  }
}

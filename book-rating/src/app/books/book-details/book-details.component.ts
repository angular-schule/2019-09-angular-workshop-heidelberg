import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, scan, reduce, tap } from 'rxjs/operators';
import { of, from, timer, interval, Subscription, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {

    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        map(isbn => this.bs.getSingle(isbn)),
      )
      .subscribe(book$ => book$
          .subscribe(book => this.book = book));
  }

}

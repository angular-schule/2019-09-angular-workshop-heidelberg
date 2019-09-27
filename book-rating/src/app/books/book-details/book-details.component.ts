import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, scan, reduce, tap, mergeMap, concatMap, switchMap, catchError } from 'rxjs/operators';
import { of, from, timer, interval, Subscription, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {

    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn =>
          this.bs.getSingle(isbn).pipe(
            catchError((e: HttpErrorResponse) => of({
              title: 'Error loading ' + e.url,
              isbn: '000',
              description: '',
              rating: 0
            }))
          )
        )
      );
  }
}

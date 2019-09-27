import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, scan, reduce } from 'rxjs/operators';
import { of, from, timer, interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // #region
    // only for simple cases
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn'))
      )
      .subscribe(isbn => this.isbn = isbn);
      // #endregion


    /// --- PLAYGROUND ----

    const observer = {
      next: s => console.log(s),
      error: e => console.error(e),
      complete: () => console.log('COMPLETE')
    };

    const observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        map(z => z * 10),
        filter(z => z > 20),
        map(z => z + 5),
        reduce((a, b) => a + b),
        map(summe => '⭐️'.repeat(summe))
      );

    this.subscription = observable
        .subscribe(observer);
  }

  // beste Alternative: async pipe
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

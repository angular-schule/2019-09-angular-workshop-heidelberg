import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { of, from, timer, interval, Subscription } from 'rxjs';

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

    this.subscription = of('😀', '😎', '😇', '😱')
        .subscribe(observer);
  }

  // beste Alternative: async pipe
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

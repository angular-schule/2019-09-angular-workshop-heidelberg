import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { of, from, timer, interval } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

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
    // import { of, from, timer, interval } from 'rxjs';
    of('😀', '😎', '😇', '😱')
        .subscribe(
          s => console.log(s),
          e => console.error(e),
          () => console.log('COMPLETE')
        );



  }

}

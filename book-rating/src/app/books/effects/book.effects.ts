import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';



@Injectable()
export class BookEffects {

  // loadBooksDead$ = createEffect(() => this.actions$)

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.loadBooks),
    switchMap(() =>
      this.bs.getAll().pipe(
        map(data => BookActions.loadBooksSuccess({ data })),
        catchError(error => of(BookActions.loadBooksFailure({ error }))))
    )
  ));

  constructor(private actions$: Actions, private bs: BookStoreService) {}

}

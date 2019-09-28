import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, bookFeatureKey } from '../reducers/book.reducer';

export const getBookState = createFeatureSelector<State>(bookFeatureKey);

export const getBooksLoading = createSelector(
  getBookState,
  state => state.loading
);

export const getAllBooks = createSelector(
  getBookState,
  state => state.books
);

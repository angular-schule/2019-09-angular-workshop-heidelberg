import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateBookComponent {

  @Output()
  createBook = new EventEmitter<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  constructor() {
    this.bookForm.valueChanges.subscribe(
      e => console.log(e)
    );
  }

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.dirty && control.invalid;
  }

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.hasError(errorCode) && control.dirty;

  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    this.createBook.emit(newBook);
    this.bookForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

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
}

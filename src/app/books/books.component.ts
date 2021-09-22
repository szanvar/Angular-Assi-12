import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  books : string [] = 
  ["The C Programming Language. 2nd Edition", "Introduction to Algorithms", 
  "Design Patterns", "Ng-book 2", "Learning TypeScript"];

  ngOnInit(): void {
  }

}


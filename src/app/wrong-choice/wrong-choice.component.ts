import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrong-choice',
  template: `
    <h3>
      Wrong choice ... Try Again ...
    </h3>
  `,
  styles: [
  ]
})
export class WrongChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
  }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  technologies : string [] = 
  ["Angular", "Node JS", "Android", "Big Data", "Artificial Intelligence"];
  
  ngOnInit(): void {
  }

}

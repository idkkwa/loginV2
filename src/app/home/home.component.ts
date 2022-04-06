import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
fruits: string[]= ["Apple", "Grapes","Orange"]

  constructor() { }

  ngOnInit(): void {
  }

}

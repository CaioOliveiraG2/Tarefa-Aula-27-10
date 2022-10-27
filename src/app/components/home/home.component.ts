import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = 'Caio Oliveira';
  ra: string = '0050831911038';
  today = new Date();

  constructor() {}

  ngOnInit() {}
}

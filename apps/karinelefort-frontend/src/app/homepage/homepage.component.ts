import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {
    console.log('isInit')
  }
}

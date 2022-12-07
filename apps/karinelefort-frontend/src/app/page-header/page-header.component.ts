import { Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent  {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() tiles:{ title: string; link: string; imgSrc: string; }[] = [];
}

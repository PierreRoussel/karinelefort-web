import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'karinelefort-web-image-with-title-overlay',
  templateUrl: './image-with-title-overlay.component.html',
  styleUrls: ['./image-with-title-overlay.component.scss'],
})
export class ImageWithTitleOverlayComponent {
  @Input() title = "";
  @Input() delay = 0;
  @Input() link = '';
  @Input() imgSrc = '';
  @Input() id = 1;

  constructor(
    private router: Router  ) {}

  redirect() {
    this.router.navigate([`/${this.link}`])
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-image-with-title-overlay',
  templateUrl: './image-with-title-overlay.component.html',
  styleUrls: ['./image-with-title-overlay.component.scss'],
})
export class ImageWithTitleOverlayComponent {
  @Input() title = '';
  @Input() link = '';
  @Input() imgSrc = '';
}

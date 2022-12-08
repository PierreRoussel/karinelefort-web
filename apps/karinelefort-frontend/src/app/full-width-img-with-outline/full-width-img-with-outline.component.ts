import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-full-width-img-with-outline',
  templateUrl: './full-width-img-with-outline.component.html',
  styleUrls: ['./full-width-img-with-outline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullWidthImgWithOutlineComponent {
  @Input() imgUrl = ""
}

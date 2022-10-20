import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Image } from '../../types/images';

@Component({
  selector: 'karinelefort-web-horizontal-img-galery',
  templateUrl: './horizontal-img-galery.component.html',
  styleUrls: ['./horizontal-img-galery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalImgGaleryComponent {
  @Input() images: Image[] = [];

  // ngOnInit(): void {
  // const userAgent = navigator.userAgent;
  // if (
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
  //     userAgent
  //   )
  // )
  //   this.images.length = 6;
  // else this.images.length = 5;
  // }
}

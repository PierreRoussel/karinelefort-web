import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-horizontal-img-galery',
  templateUrl: './horizontal-img-galery.component.html',
  styleUrls: ['./horizontal-img-galery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalImgGaleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

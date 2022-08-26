import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: ['./text-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

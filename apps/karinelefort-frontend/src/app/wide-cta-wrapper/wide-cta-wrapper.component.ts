import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-wide-cta-wrapper',
  templateUrl: './wide-cta-wrapper.component.html',
  styleUrls: ['./wide-cta-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WideCtaWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

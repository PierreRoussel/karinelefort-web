import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-wide-cta',
  templateUrl: './wide-cta.component.html',
  styleUrls: ['./wide-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WideCtaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

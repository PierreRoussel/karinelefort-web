import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-info-buble-wrapper',
  templateUrl: './info-buble-wrapper.component.html',
  styleUrls: ['./info-buble-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBubleWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

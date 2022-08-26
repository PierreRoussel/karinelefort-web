import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-info-bubble',
  templateUrl: './info-bubble.component.html',
  styleUrls: ['./info-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBubbleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

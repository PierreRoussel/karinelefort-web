import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-basic-cta-btn',
  templateUrl: './basic-cta-btn.component.html',
  styleUrls: ['./basic-cta-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCtaBtnComponent {
  @Input() btnTitle = "Click";
}

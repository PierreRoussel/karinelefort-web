import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextWithLink } from '../../types/object';

@Component({
  selector: 'karinelefort-web-info-buble-wrapper',
  templateUrl: './info-buble-wrapper.component.html',
  styleUrls: ['./info-buble-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBubleWrapperComponent {
  @Input() bubbles: TextWithLink[] = [];
}

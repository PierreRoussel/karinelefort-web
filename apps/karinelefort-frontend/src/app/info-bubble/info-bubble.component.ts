import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextWithLink } from '../../types/object';

@Component({
  selector: 'karinelefort-web-info-bubble',
  templateUrl: './info-bubble.component.html',
  styleUrls: ['./info-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBubbleComponent {
  @Input() bubble: TextWithLink = { text: '' };
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CtaWrapper } from '../../types/cta';

@Component({
  selector: 'karinelefort-web-wide-cta',
  templateUrl: './wide-cta.component.html',
  styleUrls: ['./wide-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WideCtaComponent {
  @Input() ctaItem: CtaWrapper | undefined;
}

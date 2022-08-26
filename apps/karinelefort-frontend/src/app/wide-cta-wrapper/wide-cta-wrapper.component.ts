import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CtaWrapper } from '../../types/cta';

@Component({
  selector: 'karinelefort-web-wide-cta-wrapper',
  templateUrl: './wide-cta-wrapper.component.html',
  styleUrls: ['./wide-cta-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WideCtaWrapperComponent {
  @Input() ctaItems: CtaWrapper[] = [];
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CtaWrapper } from '../../types/cta';
import { Router } from '@angular/router';

@Component({
  selector: 'karinelefort-web-wide-cta',
  templateUrl: './wide-cta.component.html',
  styleUrls: ['./wide-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WideCtaComponent {
  @Input() ctaItem: CtaWrapper | undefined;

  constructor(private router: Router) {}
  redirect() {
    if (this?.ctaItem?.link) {
      if (!this.isExternalLink(this.ctaItem.link)) {
        return this.router.navigate([this.ctaItem.link]);
      }
      return window.open(this.ctaItem.link, '_blank');
    }
    return;
  }

  isExternalLink = (url: string) => {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
  };
}

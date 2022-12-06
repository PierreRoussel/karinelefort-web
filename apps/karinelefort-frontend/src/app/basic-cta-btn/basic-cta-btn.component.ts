import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'karinelefort-web-basic-cta-btn',
  templateUrl: './basic-cta-btn.component.html',
  styleUrls: ['./basic-cta-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCtaBtnComponent {
  @Input() btnTitle = 'Click';
  @Input() link = '';

  constructor(private router: Router) {}

  redirect() {
    if (this.link) {
      if (!this.isExternalLink(this.link)) {
        return this.router.navigate([this.link]);
      }
      return window.open(this.link, '_blank');
    }
    return;
  }

  isExternalLink = (url: string) => {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
  };
}

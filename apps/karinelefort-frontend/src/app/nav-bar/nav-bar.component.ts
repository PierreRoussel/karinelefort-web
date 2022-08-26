import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'karinelefort-web-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  sideNavStatus = false;

  toggleSideNav(event: boolean) {
    if(event) this.sideNavStatus = event;
    else this.sideNavStatus = !this.sideNavStatus;

  }
}

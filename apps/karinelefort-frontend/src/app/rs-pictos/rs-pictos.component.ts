import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-rs-pictos',
  templateUrl: './rs-pictos.component.html',
  styleUrls: ['./rs-pictos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsPictosComponent {
  @Input() pictoHeights = 26;
}

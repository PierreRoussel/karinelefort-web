import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-citation-fw',
  templateUrl: './citation-fw.component.html',
  styleUrls: ['./citation-fw.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitationFWComponent {
  @Input() text = '';
  @Input() author = '';
}

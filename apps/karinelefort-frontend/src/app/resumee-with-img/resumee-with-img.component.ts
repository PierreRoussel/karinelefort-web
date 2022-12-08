import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Resumee } from '../../types/object';

@Component({
  selector: 'karinelefort-web-resumee-with-img',
  templateUrl: './resumee-with-img.component.html',
  styleUrls: ['./resumee-with-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeeWithImgComponent {
  @Input() resumee:Resumee;
}

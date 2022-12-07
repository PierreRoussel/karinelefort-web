import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'karinelefort-web-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() tiles:Record<string|number, unknown>[] = [];
  baseRoute = this.route.snapshot.url[0].path;

  constructor(
    private route: ActivatedRoute  ) {}
}

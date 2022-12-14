import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'karinelefort-web-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {
  private _status = false;
  ngOnInit() {
    this.status = false;
  }
  @Input()
  set status(value: boolean) {
    this._status = value;
    this.displayStatusChange.emit();
  }
  get status() {
    return this._status;
  }

  @Output() displayStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}

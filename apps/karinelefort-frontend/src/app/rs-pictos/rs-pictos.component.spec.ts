import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsPictosComponent } from './rs-pictos.component';

describe('RsPictosComponent', () => {
  let component: RsPictosComponent;
  let fixture: ComponentFixture<RsPictosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RsPictosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RsPictosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

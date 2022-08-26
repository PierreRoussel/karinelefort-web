import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBubleWrapperComponent } from './info-buble-wrapper.component';

describe('InfoBubleWrapperComponent', () => {
  let component: InfoBubleWrapperComponent;
  let fixture: ComponentFixture<InfoBubleWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBubleWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBubleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

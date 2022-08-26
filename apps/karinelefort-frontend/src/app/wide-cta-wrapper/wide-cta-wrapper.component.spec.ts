import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCtaWrapperComponent } from './wide-cta-wrapper.component';

describe('WideCtaWrapperComponent', () => {
  let component: WideCtaWrapperComponent;
  let fixture: ComponentFixture<WideCtaWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideCtaWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WideCtaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

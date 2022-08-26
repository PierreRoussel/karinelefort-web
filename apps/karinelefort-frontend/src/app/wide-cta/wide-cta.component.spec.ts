import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCtaComponent } from './wide-cta.component';

describe('WideCtaComponent', () => {
  let component: WideCtaComponent;
  let fixture: ComponentFixture<WideCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WideCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

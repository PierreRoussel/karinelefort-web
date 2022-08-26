import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthImgWithOutlineComponent } from './full-width-img-with-outline.component';

describe('FullWidthImgWithOutlineComponent', () => {
  let component: FullWidthImgWithOutlineComponent;
  let fixture: ComponentFixture<FullWidthImgWithOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullWidthImgWithOutlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullWidthImgWithOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsImgWithTextComponent } from './testimonials-img-with-text.component';

describe('TestimonialsImgWithTextComponent', () => {
  let component: TestimonialsImgWithTextComponent;
  let fixture: ComponentFixture<TestimonialsImgWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsImgWithTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialsImgWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeeWithImgComponent } from './resumee-with-img.component';

describe('ResumeeWithImgComponent', () => {
  let component: ResumeeWithImgComponent;
  let fixture: ComponentFixture<ResumeeWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeeWithImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeeWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

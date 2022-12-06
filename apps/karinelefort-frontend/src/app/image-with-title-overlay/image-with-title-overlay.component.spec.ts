import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithTitleOverlayComponent } from './image-with-title-overlay.component';

describe('ImageWithTitleOverlayComponent', () => {
  let component: ImageWithTitleOverlayComponent;
  let fixture: ComponentFixture<ImageWithTitleOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageWithTitleOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageWithTitleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

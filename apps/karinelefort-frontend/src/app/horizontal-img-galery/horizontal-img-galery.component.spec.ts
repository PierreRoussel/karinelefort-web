import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalImgGaleryComponent } from './horizontal-img-galery.component';

describe('HorizontalImgGaleryComponent', () => {
  let component: HorizontalImgGaleryComponent;
  let fixture: ComponentFixture<HorizontalImgGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalImgGaleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalImgGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

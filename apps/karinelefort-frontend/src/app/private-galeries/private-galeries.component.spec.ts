import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateGaleriesComponent } from './private-galeries.component';

describe('PrivateGaleriesComponent', () => {
  let component: PrivateGaleriesComponent;
  let fixture: ComponentFixture<PrivateGaleriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateGaleriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateGaleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

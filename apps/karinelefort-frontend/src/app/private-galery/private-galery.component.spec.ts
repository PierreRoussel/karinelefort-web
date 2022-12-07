import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateGaleryComponent } from './private-galery.component';

describe('PrivateGaleryComponent', () => {
  let component: PrivateGaleryComponent;
  let fixture: ComponentFixture<PrivateGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateGaleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

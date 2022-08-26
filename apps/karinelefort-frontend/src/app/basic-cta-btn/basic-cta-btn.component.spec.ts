import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCtaBtnComponent } from './basic-cta-btn.component';

describe('BasicCtaBtnComponent', () => {
  let component: BasicCtaBtnComponent;
  let fixture: ComponentFixture<BasicCtaBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicCtaBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicCtaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosTarifsComponent } from './infos-tarifs.component';

describe('InfosTarifsComponent', () => {
  let component: InfosTarifsComponent;
  let fixture: ComponentFixture<InfosTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfosTarifsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfosTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

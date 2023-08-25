import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISROComponent } from './isro.component';

describe('ISROComponent', () => {
  let component: ISROComponent;
  let fixture: ComponentFixture<ISROComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ISROComponent]
    });
    fixture = TestBed.createComponent(ISROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

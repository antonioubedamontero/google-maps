import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyLineComponent } from './poly-line.component';

describe('PolyLineComponent', () => {
  let component: PolyLineComponent;
  let fixture: ComponentFixture<PolyLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolyLineComponent]
    });
    fixture = TestBed.createComponent(PolyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundOverlayComponent } from './ground-overlay.component';

describe('GroundOverlayComponent', () => {
  let component: GroundOverlayComponent;
  let fixture: ComponentFixture<GroundOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroundOverlayComponent]
    });
    fixture = TestBed.createComponent(GroundOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

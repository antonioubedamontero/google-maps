import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLayerComponent } from './traffic-layer.component';

describe('TrafficLayerComponent', () => {
  let component: TrafficLayerComponent;
  let fixture: ComponentFixture<TrafficLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrafficLayerComponent]
    });
    fixture = TestBed.createComponent(TrafficLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

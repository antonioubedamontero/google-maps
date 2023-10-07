import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatMapLayerComponent } from './heat-map-layer.component';

describe('HeatMapLayerComponent', () => {
  let component: HeatMapLayerComponent;
  let fixture: ComponentFixture<HeatMapLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatMapLayerComponent]
    });
    fixture = TestBed.createComponent(HeatMapLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

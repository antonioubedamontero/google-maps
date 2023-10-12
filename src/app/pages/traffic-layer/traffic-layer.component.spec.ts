import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLayerComponent } from './traffic-layer.component';
import { CoreModule } from 'src/app/core/core.module';

describe('TrafficLayerComponent', () => {
  let component: TrafficLayerComponent;
  let fixture: ComponentFixture<TrafficLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrafficLayerComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(TrafficLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

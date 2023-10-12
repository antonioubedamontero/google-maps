import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlLayerComponent } from './kml-layer.component';
import { CoreModule } from 'src/app/core/core.module';

describe('KmlLayerComponent', () => {
  let component: KmlLayerComponent;
  let fixture: ComponentFixture<KmlLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmlLayerComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(KmlLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

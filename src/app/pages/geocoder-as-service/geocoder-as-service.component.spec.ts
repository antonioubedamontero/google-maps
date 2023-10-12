import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocoderAsServiceComponent } from './geocoder-as-service.component';
import { CoreModule } from 'src/app/core/core.module';

describe('GeocoderAsServiceComponent', () => {
  let component: GeocoderAsServiceComponent;
  let fixture: ComponentFixture<GeocoderAsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeocoderAsServiceComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(GeocoderAsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

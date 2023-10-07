import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocoderAsServiceComponent } from './geocoder-as-service.component';

describe('GeocoderAsServiceComponent', () => {
  let component: GeocoderAsServiceComponent;
  let fixture: ComponentFixture<GeocoderAsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeocoderAsServiceComponent]
    });
    fixture = TestBed.createComponent(GeocoderAsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

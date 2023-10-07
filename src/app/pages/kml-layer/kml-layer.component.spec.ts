import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlLayerComponent } from './kml-layer.component';

describe('KmlLayerComponent', () => {
  let component: KmlLayerComponent;
  let fixture: ComponentFixture<KmlLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmlLayerComponent]
    });
    fixture = TestBed.createComponent(KmlLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

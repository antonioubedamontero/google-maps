import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcycleLayerComponent } from './bcycle-layer.component';

describe('BcycleLayerComponent', () => {
  let component: BcycleLayerComponent;
  let fixture: ComponentFixture<BcycleLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BcycleLayerComponent]
    });
    fixture = TestBed.createComponent(BcycleLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

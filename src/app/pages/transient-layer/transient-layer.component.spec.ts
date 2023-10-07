import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransientLayerComponent } from './transient-layer.component';

describe('TransientLayerComponent', () => {
  let component: TransientLayerComponent;
  let fixture: ComponentFixture<TransientLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransientLayerComponent]
    });
    fixture = TestBed.createComponent(TransientLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

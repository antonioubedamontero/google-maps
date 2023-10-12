import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransientLayerComponent } from './transient-layer.component';
import { CoreModule } from 'src/app/core/core.module';

describe('TransientLayerComponent', () => {
  let component: TransientLayerComponent;
  let fixture: ComponentFixture<TransientLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransientLayerComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(TransientLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

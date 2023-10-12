import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcycleLayerComponent } from './bcycle-layer.component';
import { CoreModule } from 'src/app/core/core.module';

describe('BcycleLayerComponent', () => {
  let component: BcycleLayerComponent;
  let fixture: ComponentFixture<BcycleLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BcycleLayerComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(BcycleLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

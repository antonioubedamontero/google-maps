import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundOverlayComponent } from './ground-overlay.component';
import { CoreModule } from 'src/app/core/core.module';

describe('GroundOverlayComponent', () => {
  let component: GroundOverlayComponent;
  let fixture: ComponentFixture<GroundOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroundOverlayComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(GroundOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

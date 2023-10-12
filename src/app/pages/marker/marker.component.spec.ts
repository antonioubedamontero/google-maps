import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerComponent } from './marker.component';
import { CoreModule } from 'src/app/core/core.module';

describe('MarkerComponent', () => {
  let component: MarkerComponent;
  let fixture: ComponentFixture<MarkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkerComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(MarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

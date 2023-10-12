import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonComponent } from './polygon.component';
import { CoreModule } from 'src/app/core/core.module';

describe('PolygonComponent', () => {
  let component: PolygonComponent;
  let fixture: ComponentFixture<PolygonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolygonComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(PolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

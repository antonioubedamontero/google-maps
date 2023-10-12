import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleComponent } from './circle.component';
import { CoreModule } from 'src/app/core/core.module';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(CircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleComponent } from './rectangle.component';
import { CoreModule } from 'src/app/core/core.module';

describe('RectangleComponent', () => {
  let component: RectangleComponent;
  let fixture: ComponentFixture<RectangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectangleComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(RectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

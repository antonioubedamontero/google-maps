import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyLineComponent } from './poly-line.component';
import { CoreModule } from 'src/app/core/core.module';

describe('PolyLineComponent', () => {
  let component: PolyLineComponent;
  let fixture: ComponentFixture<PolyLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolyLineComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(PolyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

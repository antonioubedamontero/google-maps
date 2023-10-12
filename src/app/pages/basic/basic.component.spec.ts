import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';
import { CoreModule } from 'src/app/core/core.module';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

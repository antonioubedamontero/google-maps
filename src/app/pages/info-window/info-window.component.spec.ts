import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowComponent } from './info-window.component';
import { CoreModule } from 'src/app/core/core.module';

describe('InfoWindowComponent', () => {
  let component: InfoWindowComponent;
  let fixture: ComponentFixture<InfoWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoWindowComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(InfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

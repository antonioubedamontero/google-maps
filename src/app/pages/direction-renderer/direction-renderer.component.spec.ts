import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionRendererComponent } from './direction-renderer.component';

describe('DirectionRendererComponent', () => {
  let component: DirectionRendererComponent;
  let fixture: ComponentFixture<DirectionRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectionRendererComponent]
    });
    fixture = TestBed.createComponent(DirectionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

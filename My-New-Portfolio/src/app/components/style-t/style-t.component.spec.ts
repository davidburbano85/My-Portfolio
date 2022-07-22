import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTComponent } from './style-t.component';

describe('StyleTComponent', () => {
  let component: StyleTComponent;
  let fixture: ComponentFixture<StyleTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

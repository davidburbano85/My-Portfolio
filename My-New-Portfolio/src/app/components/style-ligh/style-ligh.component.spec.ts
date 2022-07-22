import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleLighComponent } from './style-ligh.component';

describe('StyleLighComponent', () => {
  let component: StyleLighComponent;
  let fixture: ComponentFixture<StyleLighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleLighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleLighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPadreComponent } from './header-padre.component';

describe('HeaderPadreComponent', () => {
  let component: HeaderPadreComponent;
  let fixture: ComponentFixture<HeaderPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

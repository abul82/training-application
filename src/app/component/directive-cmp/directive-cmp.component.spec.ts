import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCmpComponent } from './directive-cmp.component';

describe('DirectiveCmpComponent', () => {
  let component: DirectiveCmpComponent;
  let fixture: ComponentFixture<DirectiveCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

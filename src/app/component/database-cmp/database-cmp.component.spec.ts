import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseCmpComponent } from './database-cmp.component';

describe('DatabaseCmpComponent', () => {
  let component: DatabaseCmpComponent;
  let fixture: ComponentFixture<DatabaseCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

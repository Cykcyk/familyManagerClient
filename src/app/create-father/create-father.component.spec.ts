import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFatherComponent } from './create-father.component';

describe('CreateFatherComponent', () => {
  let component: CreateFatherComponent;
  let fixture: ComponentFixture<CreateFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

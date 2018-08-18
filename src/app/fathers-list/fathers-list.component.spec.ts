import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersListComponent } from './fathers-list.component';

describe('FathersListComponent', () => {
  let component: FathersListComponent;
  let fixture: ComponentFixture<FathersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FathersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FathersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

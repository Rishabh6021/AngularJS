import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FectchOperatorComponent } from './fectch-operator.component';

describe('FectchOperatorComponent', () => {
  let component: FectchOperatorComponent;
  let fixture: ComponentFixture<FectchOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FectchOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FectchOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

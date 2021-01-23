import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyAgeComponent } from './early-age.component';

describe('EarlyAgeComponent', () => {
  let component: EarlyAgeComponent;
  let fixture: ComponentFixture<EarlyAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlyAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

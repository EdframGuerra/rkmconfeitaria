import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerArea } from './customer.area';

describe('CustomerArea', () => {
  let component: CustomerArea;
  let fixture: ComponentFixture<CustomerArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

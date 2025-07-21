import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveCard } from './incentive.card';

describe('IncentiveCard', () => {
  let component: IncentiveCard;
  let fixture: ComponentFixture<IncentiveCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncentiveCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncentiveCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

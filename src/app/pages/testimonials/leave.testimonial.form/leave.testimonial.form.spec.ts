import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTestimonialForm } from './leave.testimonial.form';

describe('LeaveTestimonialForm', () => {
  let component: LeaveTestimonialForm;
  let fixture: ComponentFixture<LeaveTestimonialForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveTestimonialForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTestimonialForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

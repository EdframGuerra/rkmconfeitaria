import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsCarousel } from './highlights.carousel';

describe('HighlightsCarousel', () => {
  let component: HighlightsCarousel;
  let fixture: ComponentFixture<HighlightsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightsCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightsCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

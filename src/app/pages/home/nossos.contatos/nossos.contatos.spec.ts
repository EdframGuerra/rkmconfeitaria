import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosContatos } from './nossos.contatos';

describe('NossosContatos', () => {
  let component: NossosContatos;
  let fixture: ComponentFixture<NossosContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NossosContatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossosContatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

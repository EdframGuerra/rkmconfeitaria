import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioFuncionamento } from './horario.funcionamento';

describe('HorarioFuncionamento', () => {
  let component: HorarioFuncionamento;
  let fixture: ComponentFixture<HorarioFuncionamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorarioFuncionamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioFuncionamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

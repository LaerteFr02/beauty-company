import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAgendamentoComponent } from './label-agendamento.component';

describe('LabelAgendamentoComponent', () => {
  let component: LabelAgendamentoComponent;
  let fixture: ComponentFixture<LabelAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoComponent } from './simulacao.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SimulacaoComponent', () => {
  let component: SimulacaoComponent;
  let fixture: ComponentFixture<SimulacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ 
        SimulacaoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('TESTE DE SOMA', () => {
    expect(3+1).toBe(4);
  });

  // test("it creates my component", () => {
  //   expect(component).toBeTruthy();
  // });

});

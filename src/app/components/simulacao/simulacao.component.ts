import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  public isPlanSelected:boolean = false;
  public simuladorForm = this.fb.group({
    ddd_origin: ['1'],
    ddd_destiny: ['2'],
    time: ['15'],
    planId: [''],
  });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
  }

  update() {
    console.log('entrou em update');  
    console.log(this.simuladorForm.get('ddd_origin').value, 
                this.simuladorForm.get('ddd_destiny').value, 
                this.simuladorForm.get('time').value, 
                this.simuladorForm.get('planId').value)  
  }

  planSelected(event) {
    this.isPlanSelected = true;
    var selectedPlan = event.path[1];
    var plans = event.path[2].childNodes;

    plans.forEach(plan => {
      plan == selectedPlan ? 
        plan.setAttribute("style", "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500") : 
        plan.setAttribute("style", "background-color: white; color: black; border-color: black; font-weight: 100")
    });

    this.update()
  }

}

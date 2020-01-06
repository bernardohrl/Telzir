import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Call } from 'src/models/call.model';

@Component({
  selector: 'simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  public callOptions: Array<Call> = null;
  public isPlanSelected:boolean = false;
  public simuladorForm = this.fb.group({
    ddd_origin: ['1'],
    ddd_destiny: ['2'],
    time: ['15'],
    planId: [''],
  });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {

    // Mocka dados das ligações
    this.callOptions = this.mockCalls();
  }

  update() {
    console.log('entrou em update');  
    console.log(this.simuladorForm.get('ddd_origin').value, 
                this.simuladorForm.get('ddd_destiny').value, 
                this.simuladorForm.get('time').value, 
                this.simuladorForm.get('planId').value)  
  }

  planSelected(event) {
    var selectedPlan = event.path[1];
    var plans = event.path[2].childNodes;
    
    this.isPlanSelected = true;
    var selectedStyle:string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle:string = "background-color: white; color: black; border-color: black; font-weight: 100";

    plans.forEach(plan => {
      plan == selectedPlan ?
              plan.setAttribute("style", selectedStyle) : 
              plan.setAttribute("style", defaultStyle);
    });

    // this.update()
  }


  private mockCalls(): Array<Call> {
    var calls: Array<Call>;
    
    // var location011: Location = new Location();

    var location011 = { 'name': 'São Paulo', 'ddd': '011' }
    var location016 = { 'name': 'São Paulo', 'ddd': '016' }
    var location017 = { 'name': 'São Paulo', 'ddd': '017' }
    var location018 = { 'name': 'São Paulo', 'ddd': '018' }

    var data = [
      {
        'origin': location011,
        'destinations': [
          {
            'location': location016,
            'price': 1.90
          }
        ]
      }

    ]
 

    return null;
  };

}

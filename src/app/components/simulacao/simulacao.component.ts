import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Call } from 'src/models/call.model';
import { Location } from '@angular/common';
import { Destination } from 'src/models/destination.model';
import { Plan } from 'src/models/plan.model';
import { Mocker } from 'src/helpers/Mocker';

@Component({
  selector: 'simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  public callOptions: Array<Call> = null;
  public plans: Array<Plan> = null;
  public selectedCall: Call = null;
  public showPrices: boolean = false;

  public faleMaisPrice: number = 0;
  public normalPrice: number = 0;

  
  public simuladorForm = this.fb.group({
    selectedCallId: [0],
    selectedDestinyId: [0],
    time: [15, [Validators.max(600), Validators.min(1), Validators.required]],
    plan: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.callOptions = Mocker.mockCalls();
    this.plans = Mocker.mockPlans();
    this.selectedCall = this.callOptions[0];
  }


  callSelected() { 
    this.selectedCall = this.callOptions[this.simuladorForm.get('selectedCallId').value]
    this.updatePrice();
  }


  planSelected(event) {
    var selectedPlan = event.path[1];
    var [comment, ...plans]: Array<any> = event.path[2].childNodes;
    
    var selectedStyle:string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle:string = "background-color: white; color: black; border-color: black; font-weight: 100";
    
    plans.forEach(plan => {
      plan == selectedPlan ?
              plan.setAttribute("style", selectedStyle) : 
              plan.setAttribute("style", defaultStyle);
    });

    this.updatePrice();
  }


  updatePrice(): void {
    // UPDATED ONLY IF FORM IS VALID
    if(this.simuladorForm.valid)  this.showPrices = true;
    else                          return;
    
    var usedTime = this.simuladorForm.get('time').value;
    var availableMinutes: number = parseInt(this.simuladorForm.get('plan').value);
    var price: number =  this.selectedCall.destinations[this.simuladorForm.get('selectedDestinyId').value].price;
    

    this.faleMaisPrice = Math.max(0, (usedTime - availableMinutes)) * price;
    this.normalPrice = usedTime * price;



    console.log('\n\n\n')
    console.log('Tempo usado:', usedTime);
    console.log('Preço:', price);
    console.log('Total sem plano:', this.normalPrice);
    console.log('\n')
    console.log('Total com plano ' + this.simuladorForm.get('plan').value + ':', this.faleMaisPrice);
  }

  
  getInteger(numb): string { 
    var intString: string = (numb + "").split(".")[0]                           // Gets int part
    return intString.length < 2 ? '0' + intString : intString;                  // Turns 'x' to '0x' 
  }
  getDecimal(numb): string {
    var formatedDecimal: string = (Math.round(numb * 100) / 100).toFixed(2);   // Formats 'xx.x' to 'xx.x0'
    return (formatedDecimal).split(".")[1]                                     // Gets decimal part
  }

}

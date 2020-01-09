import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Call } from 'src/models/call.model';
import { Location } from '@angular/common';
import { Destination } from 'src/models/destination.model';
import { Plan } from 'src/models/plan.model';

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
    time: [15, [Validators.max(500), Validators.min(1), Validators.required]],
    plan: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.mockData();
    this.selectedCall = this.callOptions[0];
  }


  callSelected() { this.selectedCall = this.callOptions[this.simuladorForm.get('selectedCallId').value] }


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
    console.log(usedTime)
    console.log(usedTime*price, availableMinutes*price)
    this.normalPrice = usedTime * price;
  }

  
  getInteger(numb): string { 
    var intString: string = (numb + "").split(".")[0]                           // Gets int part
    return intString.length < 2 ? intString + '0' : intString;                  // Turns 'x' to '0x' 
  }
  getDecimal(numb): string {
    var formatedDecimal: string = (Math.round(numb * 100) / 100).toFixed(2);   // Formats 'xx.x' to 'xx.x0'
    return (formatedDecimal).split(".")[1]                                     // Gets decimal part
  }








  private mockData(): void {
    let location011: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '011' };
    let location016: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '016' };
    let location017: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '017' };
    let location018: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '018' };
    

    // Calls From 011
    let destination011_016 = <Destination> <any> { 'location': location016, 'price': 1.90 }
    let destination011_017 = <Destination> <any> { 'location': location017, 'price': 1.70 }
    let destination011_018 = <Destination> <any> { 'location': location018, 'price': 0.90 }

    let call011 = <Call> <any> {
      'origin': location011,
      'destinations': [destination011_016, destination011_017, destination011_018]
    }


    // Call From 016
    let destination016_011 = <Destination> <any> { 'location': location011, 'price': 2.90}

    let call016 = <Call> <any> {
      'origin': location016,
      'destinations': [destination016_011]
    }


    // Call From 017
    let destination017_011 = <Destination> <any> { 'location': location011, 'price': 2.70 }

    let call017 = <Call> <any> {
      'origin': location017,
      'destinations': [destination017_011]
    }


    // Call From 018
    let destination018_011 = <Destination> <any> { 'location': location011, 'price': 1.90}

    let call018 = <Call> <any> {
      'origin': location018,
      'destinations': [destination018_011]
    }


    this.callOptions = [call011, call016, call017, call018];




    // PLANS
    let plan30 = <Plan> <any> { 'name': 'faleMais30', 'time': 30 }
    let plan60 = <Plan> <any> { 'name': 'faleMais60', 'time': 60 }
    let plan90 = <Plan> <any> { 'name': 'faleMais90', 'time': 90 }
    let plan120 = <Plan> <any> { 'name': 'faleMais120', 'time': 120 }

    this.plans = [plan30, plan60, plan90, plan120]
  };

}

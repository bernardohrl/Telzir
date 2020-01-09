import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Call } from 'src/models/call.model';
import { Location } from '@angular/common';
import { Destination } from 'src/models/destination.model';

@Component({
  selector: 'simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  public callOptions: Array<Call> = null;
  public selectedCall: Call = null;
  public showPlan: boolean = false;
  
  public simuladorForm = this.fb.group({
    selectedCallId: [0],
    selectedDestinyId: [0],
    time: ['15', [Validators.max(100), Validators.min(0), Validators.required]],
    planId: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.callOptions = this.mockCalls();
    this.selectedCall = this.callOptions[0];
  }


  callSelected() { this.selectedCall = this.callOptions[this.simuladorForm.get('selectedCallId').value] }

  checkValid() { this.simuladorForm.valid ? this.updatePrice() : console.log('invalido') }


  planSelected(event) {
    var selectedPlan = event.path[1];
    var plans = event.path[2].childNodes;
    
    var selectedStyle:string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle:string = "background-color: white; color: black; border-color: black; font-weight: 100";

    plans.forEach(plan => {
      plan == selectedPlan ?
              plan.setAttribute("style", selectedStyle) : 
              plan.setAttribute("style", defaultStyle);
    });

    this.checkValid();
  }



  updatePrice() {
    console.log('entrou em update price')
    this.showPlan = true;
  }







  private mockCalls(): Array<Call> {
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


    var calls: Array<Call> = [call011, call016, call017, call018];
    return calls;
  };

}

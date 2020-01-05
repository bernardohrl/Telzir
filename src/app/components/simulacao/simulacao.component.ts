import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  
  simuladorForm = this.fb.group({
    ddd_origin: ['ave'],
    ddd_destiny: [''],
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

}

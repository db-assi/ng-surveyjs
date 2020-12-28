import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { SurveyService } from '../../core/services/survey/survey.service';
import resources from '../../../assets/data/resources.json';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})

export class CompleteComponent implements OnInit {

  result: any;
  symptoms: any[] = [];
  goals: any[] = [];
  extra_content: any[] = [];

  resources_values: string[] = ["resource_1", "resource_2", "resource_3", "resource_4"];

  constructor(private survey: SurveyService) { }

  ngOnInit(): void {
    this.survey.currentSurveyResult.subscribe(response => this.result = response);
    console.log('this is result: ', this.result);
    this.findSymptom(this.result.symptoms);
    this.findGoal(this.result.health_goals);
    this.findResource(this.resources_values);
    //console.log(this.extra_content);
  }

  findSymptom(result: any[]) {
    console.log(this.result.symptoms)
    if(result.includes('symptoms_value_4') && result.includes('symptoms_value_5')){
      result.push('symptoms_value_45')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_4' && n != 'symptoms_value_5'
      })
    }
    if(result.includes('symptoms_value_6') && result.includes('symptoms_value_7')){
      result.push('symptoms_value_67')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_6' && n != 'symptoms_value_7'
      })
    }
    if(result.includes('symptoms_value_11') && result.includes('symptoms_value_8')){
      result.push('symptoms_value_811')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_8' && n != 'symptoms_value_11'
      })
    }
    if(result.includes('symptoms_value_9') && result.includes('symptoms_value_10') && result.includes('symptoms_value_12') && !result.includes('symptoms_value_91012')){
      result.push('symptoms_value_91012')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_9' && n != 'symptoms_value_10' && n != 'symptoms_value_12'
      })
    }
    if(result.includes('symptoms_value_9') && result.includes('symptoms_value_10') && !result.includes('symptoms_value_91012')){
      result.push('symptoms_value_91012')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_9' && n != 'symptoms_value_10'
      })
    }
    if(result.includes('symptoms_value_9') && result.includes('symptoms_value_12') && !result.includes('symptoms_value_91012')){
      result.push('symptoms_value_91012')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_9' && n != 'symptoms_value_12'
      })
    }
    if(result.includes('symptoms_value_10') && result.includes('symptoms_value_12') && !result.includes('symptoms_value_91012')){
      result.push('symptoms_value_91012')
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_10' && n != 'symptoms_value_12'
      })
    }
    if(result.includes('symptoms_value_18')){
      result = _.remove(result, (n) => {
        return n != 'symptoms_value_18'
      })
    }
    
    result.forEach((symptom: any) => {
      this.symptoms.push(_.find(resources, ['value', symptom]))
    });
  }

  findGoal(result: any) {
    console.log(this.result.health_goals);
    if(result.includes('health_goals_value_8')){
      result = _.remove(result, (n) => {
        return n != 'health_goals_value_8'
      })
    }
    result.forEach((goal: any) => {
      this.goals.push(_.find(resources, ['value', goal]))
    });
  }

  findResource(result: any) {
    result.forEach(( resources_values: any) => {
      this.extra_content.push(_.find(resources, ['value',  resources_values]))
    });
  }


}

import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { SurveyService } from '../core/services/survey/survey.service';
import resources from '../../assets/data/resources.json';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})

export class CompleteComponent implements OnInit {

  result: any;
  symptoms: any[] = [];
  goals: any[] = [];
  

  constructor(private survey: SurveyService) { }

  ngOnInit(): void {
    this.survey.currentSurveyResult.subscribe(response => this.result = response);
    this.findSymptom(this.result.symptoms);
    this.findGoal(this.result.health_goals);
    console.log(JSON.stringify(this.result.health_goals));
  }

  findSymptom(result: any) {
    result.forEach((symptom: any) => {
      this.symptoms.push(_.find(resources, ['value', symptom]))
    });
  }

  findGoal(result: any) {
    result.forEach((goal: any) => {
      this.goals.push(_.find(resources, ['value', goal]))
    });
  }

}

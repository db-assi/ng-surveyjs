import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

import { SurveyService } from 'src/app/core/services/survey/survey.service';
import json from '../../../assets/data/surveyjs-model.json';



@Component({
  selector: 'ng-app',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {

  isCompleted: boolean = false;
  isEarlyAge: boolean = false;

  constructor(private survey: SurveyService) {}

  ngOnInit(): void {

    Survey
      .SurveyNG
      .render('surveyElement',
        { 
          model: this.survey.createSurveyModel(json),
          onComplete: this.survey.onCompleteSurvey
        });

    Survey.StylesManager.applyTheme("bootstrap");

    Survey
        .FunctionFactory
        .Instance
        .register("disable", this.disable);

    this.survey.currentEarlyAge.subscribe(status => {
      this.isEarlyAge = status
    })

    this.survey.currentCompleteStatus.subscribe(status => {
      this.isCompleted = status
    });

  }

  disable(params: any) {
    
    if(!params && params.length > 1) {
      console.log('Tparams: ' + params);
      return true;
    } else {
      console.log('Fparams: ' + params);
      return false;
    }
  }




}

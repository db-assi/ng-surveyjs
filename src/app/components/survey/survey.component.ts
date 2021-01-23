import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

import { SurveyService } from 'src/app/core/services/survey/survey.service';
import json from '../../../assets/data/surveyjs-model.json';

import 'bootstrap/dist/css/bootstrap.css';
import "survey-angular/survey.css";
Survey.StylesManager.applyTheme("bootstrap");

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  survey: Survey.Model;
  isCompleted: boolean = false;
  isEarlyAge: boolean = false;

  constructor
    (
       private service: SurveyService
    ) {}

  ngOnInit(): void {
    Survey
      .SurveyNG
        .render('surveyElement',
          {
            model: this.service.createSurveyModel(json),
            onComplete: this.service.onCompleteSurvey
          });

    this.service.currentEarlyAge.subscribe(status => {this.isEarlyAge = status});
    this.service.currentCompleteStatus.subscribe(status => {this.isCompleted = status});
  }
}

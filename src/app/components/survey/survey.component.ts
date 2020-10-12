import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

import json from '../../../assets/json/surveyjs-model.json';

@Component({
  selector: 'ng-app',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var survey = new Survey.Model(json);

    Survey.StylesManager.applyTheme("bootstrap");
    
    Survey.SurveyNG.render('survey', { model: survey });
    
  }

}

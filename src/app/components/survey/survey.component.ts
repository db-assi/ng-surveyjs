import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import { Router, RouterModule, Routes } from '@angular/router';

import json from '../../../assets/json/surveyjs-model.json';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ng-app',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})


export class SurveyComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    var survey = new Survey.Model(json);

    Survey.StylesManager.applyTheme("bootstrap");
    

    survey.onComplete.add( (result) => {
      console.log(JSON.stringify({email: result.getValue('email'), fname: 'x', lname: 'x'}));
      this.http.post('https://menopause-assessment.herokuapp.com/api/signup', { email: result.getValue('email'), fname: 'x', lname: 'x' }).subscribe(response => {
        console.log(response)
      });
     console.log('this is result' +  JSON.stringify(result.getAllValues()));
    });
    

    Survey.SurveyNG.render('survey', { model: survey });

  }



}

import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

import json from '../../../assets/json/surveyjs-model.json';
import { HttpClient } from '@angular/common/http';

import { DataService } from "../../services/data.service";


@Component({
  selector: 'ng-app',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})


export class SurveyComponent implements OnInit {

  completed: boolean = false;

  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
    var survey = new Survey.Model(json);

    Survey.StylesManager.applyTheme("bootstrap");
    

    survey.onComplete.add( (result) => {
      this.data.changeMessage(result.getAllValues())
      console.log(JSON.stringify({email: result.getValue('email'), fname: 'x', lname: 'x'}));
      this.completed = true;
      this.http.post('https://menopause-assessment.herokuapp.com/api/signup', { email: result.getValue('email'), fname: 'x', lname: 'x' }).subscribe(response => {
        console.log(response)
      });
     console.log('this is result' +  JSON.stringify(result.getAllValues()));
    });
    
    

    Survey.SurveyNG.render('survey', { model: survey });

  }



}

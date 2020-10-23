import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Survey from 'survey-angular';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {
  private surveyStatus = new BehaviorSubject(false);
  currentSurveyStatus = this.surveyStatus.asObservable();
  private earlyAge = new BehaviorSubject(false);
  currentEarlyAge = this.earlyAge.asObservable();

  constructor(private http: HttpClient, private data: DataService) { }

  createSurveyModel(model: any): Survey.Model {
    return new Survey.Model(model);
  }

  onCompleteSurvey = (survey: Survey.SurveyModel, options: any ) => {
    if(options.isCompleteOnTrigger) {
      this.earlyAge.next(true)
    } else {
      this.surveyStatus.next(true);
      this.data.changeMessage(survey.getAllValues());
      this.http.post('https://menopause-assessment.herokuapp.com/api/signup', { email: survey.getValue('email'), fname: 'x', lname: 'x' }).subscribe(_response => {
          console.log(_response)
        });
    }
  }



}

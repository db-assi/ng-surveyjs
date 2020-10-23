import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Survey from 'survey-angular';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {

  private completeStatus = new BehaviorSubject(false);
  currentCompleteStatus = this.completeStatus.asObservable();

  private earlyAge = new BehaviorSubject(false);
  currentEarlyAge = this.earlyAge.asObservable();

  private surveyResult = new BehaviorSubject('Null');
  currentSurveyResult = this.surveyResult.asObservable();
  

  constructor(private http: HttpClient) { }

  createSurveyModel(model: any): Survey.Model {
    return new Survey.Model(model);
  }

  onCompleteSurvey = (survey: Survey.SurveyModel, options: any ) => {
    if(options.isCompleteOnTrigger) {
      this.earlyAge.next(true)
    } else {
      this.completeStatus.next(true);
      this.surveyResult.next(survey.getAllValues());
      this.http.post('https://menopause-assessment.herokuapp.com/api/signup', { email: survey.getValue('email'), fname: 'x', lname: 'x' }).subscribe(_response => {
          console.log(_response)
        });
    }
  }



}

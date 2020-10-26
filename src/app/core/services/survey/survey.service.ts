import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Survey from 'survey-angular';
import { SignupService } from '../signup/signup.service';

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
  

  constructor(private http: HttpClient, private signup: SignupService) { }

  createSurveyModel(model: any): Survey.Model {
    return new Survey.Model(model);
  }

  onCompleteSurvey = (survey: Survey.SurveyModel, options: any ) => {
    if(options.isCompleteOnTrigger) {
      this.earlyAge.next(true)
    } else {
      this.completeStatus.next(true);
      this.surveyResult.next(survey.getAllValues());
      this.signup.subscribe(survey);
    }
  }



}

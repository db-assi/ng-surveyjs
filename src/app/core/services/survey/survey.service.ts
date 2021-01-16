import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import * as Survey from 'survey-angular';

import { SignupService } from '../signup/signup.service';
import { RecommendationAdapter } from '../../models/reccomendation.model';
import { SubmitService } from '../submit/submit.service';
import { OutcomeService } from '../outcome/outcome.service';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {

  private completeStatus = new BehaviorSubject(false);
  currentCompleteStatus = this.completeStatus.asObservable();

  private earlyAge = new BehaviorSubject(false);
  currentEarlyAge = this.earlyAge.asObservable();

  private surveyResult = new BehaviorSubject('');
  currentSurveyResult = this.surveyResult.asObservable();

  private recommendation = new BehaviorSubject(null);
  currentRecommendation = this.recommendation.asObservable();

  status: any = '';
  //currentStatus = this.status.asObservable();

  private name = new BehaviorSubject(null);
  currentName = this.name.asObservable(); 

  private age = new BehaviorSubject(null);
  currentAge = this.age.asObservable();

  private goal = new BehaviorSubject(null);
  currentGoal = this.goal.asObservable();

  private symptom = new BehaviorSubject(null);
  currentSymptom = this.symptom.asObservable();

  constructor(private signup: SignupService, private adapter: RecommendationAdapter, private submit: SubmitService, private outcome: OutcomeService) { }

  createSurveyModel(model: any): Survey.Model {
    return new Survey.Model(model);
  }

  onCompleteSurvey = (survey: Survey.SurveyModel, options: any) => {
    if(options.isCompleteOnTrigger) {
      this.earlyAge.next(true)
    } else {
      this.completeStatus.next(true);
      this.surveyResult.next(survey.getAllValues());
      this.signup.signup(survey);
      this.recommendation.next(this.adapter.adapt(survey));
      this.submit.submit(survey);
      this.status = this.outcome.getOutcome(survey);
      this.age.next(survey.getValue('fed42f52-44a8-11eb-bafe-00155d3cabc5'));
      this.name.next(survey.getValue('name'));
    }
  }



}

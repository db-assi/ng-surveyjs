import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import * as Survey from 'survey-angular';

import { SignupService } from '../signup/signup.service';
import { RecommendationService } from '../recommendation/recommendation.service';
import { Recommendation, RecommendationAdapter } from '../../models/reccomendation.model';
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

  private status = new BehaviorSubject(null);
  currentStatus = this.status.asObservable();

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
      this.status.next(this.outcome.getOutcome(survey));
    }
  }



}

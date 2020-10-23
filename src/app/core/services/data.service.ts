import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default result');
  private surveyStatus = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
  currentSurveyStatus = this.surveyStatus.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  changeSurveyStatus(status: boolean) {
    this.surveyStatus.next(status);
  }

}
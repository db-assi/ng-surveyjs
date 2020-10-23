import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignupAdapter } from '../../models/signup.model'
import { SurveyModel } from 'survey-angular';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'https://menopause-assessment.herokuapp.com/api/signup';

  constructor(private http: HttpClient, private adapter: SignupAdapter) { }

  subscribe(survey: SurveyModel) {
    const url = `${this.baseUrl}`
    var values = this.adapter.adapt(survey);
    this.http.post(url, {
      email: values.eMail, fname: values.firstName, lname: values.lastName
    }).subscribe(res => console.log(res));
  }

}
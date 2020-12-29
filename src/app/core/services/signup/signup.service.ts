import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { SignupAdapter } from '../../models/signup.model'
import { SurveyModel } from 'survey-angular';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = (environment.apiUrl + '/signup');

  constructor(private http: HttpClient, private adapter: SignupAdapter) { }

  signup(survey: SurveyModel) {
    const url = `${this.baseUrl}`
    var values = this.adapter.adapt(survey);
    this.http.post(url, {
      email: values.email, fname: values.firstName, lname: values.lastName
    }).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.error('There was an error: ', err)
      }
    });
  }

}
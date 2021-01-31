import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { SignupAdapter } from '../../models/signup.model'
import { SurveyModel } from 'survey-angular';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = (environment.apiUrl + '/subscribe');

  constructor(private http: HttpClient, private adapter: SignupAdapter) { }

  signup(survey: SurveyModel) {
    const url = `${this.baseUrl}`
    var values = this.adapter.adapt(survey);
    this.http.post(url, {
      email: values.email, fname: values.firstName
    }).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.error('There was an error: ', err)
      }
    });
  }

  _signup(email: string, name: string) {
    const url = `${this.baseUrl}`
    this.http.post(url, {
      email: email, fname: name
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

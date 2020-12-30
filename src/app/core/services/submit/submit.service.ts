import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { SurveyModel } from 'survey-angular';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  private baseUrl = (environment.apiUrl + '/submit');

  constructor(private http: HttpClient) {}

  submit(survey: SurveyModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }
    const url = `${this.baseUrl}`
    console.log('this is service body: ' + JSON.stringify(survey))
    this.http.post(url, JSON.stringify(survey), options).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.error('There was an error: ', err)
      }
    });
  }




}

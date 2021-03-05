import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { SurveyModel } from 'survey-angular';
import { ResponseAdapter } from '../../models/submit.model';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  private baseUrl = (environment.apiUrl + '/submit');

  constructor(private http: HttpClient, private adapter: ResponseAdapter) {}

  submit(survey: SurveyModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }
    const url = `${this.baseUrl}`
    const values = this.adapter.adapt(survey);
    // console.log('SubmitService: ' + JSON.stringify(values));

    this.http.post(url, JSON.stringify(values), options).subscribe({
      next: res => {
        res
      },
      error: err => {
        // console.error('There was an error: ', err)
      }
    });
  }




}

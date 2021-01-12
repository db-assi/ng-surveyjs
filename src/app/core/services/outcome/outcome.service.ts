import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { SurveyModel } from 'survey-angular';
import { ResponseAdapter } from '../../models/submit.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {
  private baseUrl = (environment.apiUrl + '/outcome');

  constructor(private http: HttpClient, private adapter: ResponseAdapter) {}

  getOutcome(survey: SurveyModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }
    const headers = { 'content-type': 'application/json'}
    const url = `${this.baseUrl}`
    const values = this.adapter.adapt(survey);

    return this.http.post(url, JSON.stringify(values), {'headers':headers, responseType: 'json'}).pipe().subscribe();

  }
}
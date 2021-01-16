import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';

import { SurveyModel } from 'survey-angular';
import { ResponseAdapter } from '../../models/submit.model';


@Injectable({
  providedIn: 'root'
})
export class OutcomeService {
  private baseUrl = (environment.apiUrl + '/outcome');

  constructor(private http: HttpClient, private adapter: ResponseAdapter) {}

  getOutcome(survey: SurveyModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const url = `${this.baseUrl}`
    const values = this.adapter.adapt(survey);

    return this.http.post<any>(url, JSON.stringify(values), options).pipe();

  }
}
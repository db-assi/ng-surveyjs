import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  private baseUrl = (environment.apiUrl + '/submit');

  constructor(private http: HttpClient) {}

  submit(survey: any) {
    const url = `${this.baseUrl}`
    console.log('this is service body: ' + survey)
    this.http.post(url, JSON.stringify(survey)).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.error('There was an error: ', err)
      }
    });
  }




}

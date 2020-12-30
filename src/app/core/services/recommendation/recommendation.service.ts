import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Recommendation } from '../../models/reccomendation.model'

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private baseUrl = (environment.apiUrl + '/articles');

  constructor(private http: HttpClient) { }

  getRecommendations(recommendation: Recommendation) {
    const url = (`${this.baseUrl}?id=` + recommendation.symptoms.join('&id=') + recommendation.goals.join('&id='));
    return this.http.get(url)
  }

}

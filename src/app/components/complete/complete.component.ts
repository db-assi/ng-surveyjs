import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/core/models/reccomendation.model';
import { RecommendationService } from 'src/app/core/services/recommendation/recommendation.service';

import { SurveyService } from '../../core/services/survey/survey.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})

export class CompleteComponent implements OnInit {

  result: any;
  recommendation: Recommendation;
  articles: any;
  status: any;

  constructor(private survey: SurveyService, private reccomendations: RecommendationService) { }

  ngOnInit() {
    this.survey.currentSurveyResult.subscribe(response => this.result = response);
    this.survey.currentRecommendation.subscribe(response => this.recommendation = response);
    this.reccomendations.getRecommendations(this.recommendation).subscribe(response => this.articles = response);
    this.survey.currentStatus.subscribe(response => this.status = response);
    console.log(this.recommendation);
    console.log(this.articles);
    console.log('status' + this.status);
  }

  

}

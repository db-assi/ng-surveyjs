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
  articles: any = [];
  outcome: any = '';
  name: any = '';
  age: any = '';
  goal: any = '';
  symptom: any = '';
  newsletter: any;
  signup: boolean = false;


  constructor(private survey: SurveyService, private reccomendations: RecommendationService) { }

  ngOnInit() {
    this.survey.currentSurveyResult.subscribe(response => this.result = response);
    this.survey.currentRecommendation.subscribe(response => this.recommendation = response);
    this.reccomendations.getRecommendations(this.recommendation).subscribe(response => this.articles = response);
    this.survey.status.subscribe((response: any) => this.outcome = response);
    this.survey.currentName.subscribe(response => this.name = response);
    this.survey.currentAge.subscribe(response => this.age = response);
    this.survey.currentNewsleter.subscribe(response => this.newsletter = response);
    this.signup = this.showNewsletterSignUp();
    this.survey.currentSymptom.subscribe(response => this.symptom = response);
    this.survey.currentGoal.subscribe(response => this.goal = response);

    console.log('symptom ' + this.symptom);
    
  }

  showNewsletterSignUp(){
    if(this.newsletter)
      return false
    
    return true;
  }

  

}

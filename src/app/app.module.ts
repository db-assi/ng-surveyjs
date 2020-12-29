import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { CompleteComponent } from './components/complete/complete.component';

import { SurveyService } from './core/services/survey/survey.service';

import { SignupService } from './core/services/signup/signup.service';
import { SignupAdapter } from './core/models/signup.model';

import { RecommendationService } from './core/services/recommendation/recommendation.service';
import { RecommendationAdapter } from './core/models/reccomendation.model';
import { SubmitService } from './core/services/submit/submit.service';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    SurveyService,
    SignupService,
    SignupAdapter,
    RecommendationAdapter,
    RecommendationService,
    SubmitService
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }

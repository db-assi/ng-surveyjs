import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { CompleteComponent } from './components/complete/complete.component';

import { SurveyService } from './core/services/survey/survey.service';

import { SignupService } from './core/services/signup/signup.service';
import { SignupAdapter } from './core/models/signup.model';

import { RecommendationService } from './core/services/recommendation/recommendation.service';
import { RecommendationAdapter } from './core/models/reccomendation.model';
import { SubmitService } from './core/services/submit/submit.service';
import { ResponseAdapter } from './core/models/submit.model';
import { OutcomeService } from './core/services/outcome/outcome.service';
import { EarlyAgeComponent } from './components/early-age/early-age.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    CompleteComponent,
    EarlyAgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SurveyService,
    SignupService,
    SignupAdapter,
    RecommendationAdapter,
    RecommendationService,
    ResponseAdapter,
    SubmitService,
    OutcomeService
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }

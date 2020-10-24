import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { CompleteComponent } from './complete/complete.component';

import { SurveyService } from './core/services/survey/survey.service';

import { SignupService } from './core/services/signup/signup.service';
import { SignupAdapter } from './core/models/signup.model';


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
    SignupAdapter
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }

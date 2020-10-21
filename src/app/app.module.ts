import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { CompleteComponent } from './complete/complete.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http'; 
import { DataService } from './services/data.service';


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
    DataService
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }

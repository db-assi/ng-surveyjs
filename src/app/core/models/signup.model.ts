import { Injectable } from '@angular/core';
import { SurveyModel } from 'survey-angular';

import { Adapter } from '../interfaces/adapter.interface';


export class Signup {
    constructor(
        public firstName: string,
        public lastName: string,
        public eMail: string
    ){}
}

@Injectable({
    providedIn: 'root'
})
export class SignupAdapter implements Adapter<Signup> {
    adapt(survey: SurveyModel): Signup {
        return new Signup(survey.getValue('first_name'), survey.getValue('last_name'), survey.getValue('email'));
    }
}
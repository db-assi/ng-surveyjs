import { Injectable } from '@angular/core';
import { SurveyModel } from 'survey-angular';

import { Adapter } from '../interfaces/adapter.interface';


export class Signup {
    constructor(
        public firstName: string,
        public email: string
    ){}
}

@Injectable({
    providedIn: 'root'
})
export class SignupAdapter implements Adapter<Signup> {
    adapt(survey: SurveyModel): Signup {
        return new Signup(survey.getValue('name'), survey.getValue('email'));
    }
}

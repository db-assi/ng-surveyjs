import { Injectable } from '@angular/core';
import { SurveyModel } from 'survey-angular';

import { Adapter } from '../interfaces/adapter.interface';

export class Recommendation {
    constructor(
        public symptoms: string[],
        public goals: string[],
    ){}
}

@Injectable({
    providedIn: 'root'
})
export class RecommendationAdapter implements Adapter<Recommendation> {
    adapt(survey: SurveyModel): Recommendation {
        return new Recommendation(survey.getValue('fed4576b-44a8-11eb-bafe-00155d3cabc5'), survey.getValue('fed46a86-44a8-11eb-bafe-00155d3cabc5'));
    }
}

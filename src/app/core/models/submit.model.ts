import { Injectable } from '@angular/core';
import { SurveyModel } from 'survey-angular';

import { Adapter } from '../interfaces/adapter.interface';

export class Response {
    constructor(
        public age: number,
        public period: string,
        public factor: string,
        public symptoms?: string [],
        public learning?: string[],
        public goals?: string[],
        public regularity?: string,
        public factors?: string[],
        public rate?: string,
    ){}
}

@Injectable({
    providedIn: 'root'
})
export class ResponseAdapter implements Adapter<Response> {
    adapt(survey: SurveyModel): Response {
        return new Response (
                /* age */
                survey.getValue('fed42f52-44a8-11eb-bafe-00155d3cabc5'),
                /* period */
                survey.getValue('fed451a6-44a8-11eb-bafe-00155d3cabc5'),
                /* factor */
                survey.getValue('fed45682-44a8-11eb-bafe-00155d3cabc5'),
                /* symptoms */
                survey.getValue('fed4576b-44a8-11eb-bafe-00155d3cabc5'),
                /* learning */
                survey.getValue('fed469b6-44a8-11eb-bafe-00155d3cabc5'),
                /* goals */
                survey.getValue('fed46a86-44a8-11eb-bafe-00155d3cabc5'),
                /* desc */
                survey.getValue('fed453b7-44a8-11eb-bafe-00155d3cabc5'),
                /* factors */
                survey.getValue('fed454c3-44a8-11eb-bafe-00155d3cabc5'),
                /* rate */
                survey.getValue('fed459a7-44a8-11eb-bafe-00155d3cabc5')
                );
    }
}
export class Result {
    constructor(
        public age: number,
        public periodDesc: string,
        public affectPeriod: string,
        public symptoms: string[],
        public hrtInterest: string,
        public healthGoal: string[],
        public whatAffectPeriod?: string,
        public rateSymptoms?: {
            [symptom: string] : string
        },
    ){}
}
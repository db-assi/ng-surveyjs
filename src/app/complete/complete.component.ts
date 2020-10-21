import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

import JsonFind from 'json-find';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})






export class CompleteComponent implements OnInit {

  result: any;
  symptoms: string[] = [];
  goals: string[] = [];
  
  symptomsLookUp =
  [
    {
      "symptoms_value_1": "Hot or cold flushes or night sweats"
    },
    {
      "symptoms_value_2": "Difficulty falling or staying asleep"
    },
    {
      "symptoms_value_3": "Low energy or fatigue"
    },
    {
      "symptoms_value_4": "Feeling anxious or low mood"
    },
    {
      "symptoms_value_5": "Mood swings"
    }, 
    {
      "symptoms_value_6": "Reduced concentration"
    },
    {
      "symptoms_value_7": "Forgetfulness"
    }, 
    {
      "symptoms_value_8": "Reduced sex drive"
    },
    {
      "symptoms_value_9": "Leaking urine when you laugh or cough"
    }, 
    {
      "symptoms_value_10": "Frequently peeing during day or night"
    },
    {
      "symptoms_value_11": "Vaginal dryness"
    }, 
    {
      "symptoms_value_12": "Sudden need to pass urine"
    },
    {
      "symptoms_value_13": "Painful joints or muscles"
    }, 
    {
      "symptoms_value_14": "Heart racing or skipping beats"
    },
    {
      "symptoms_value_15": "Migranes"
    }, 
    {
      "symptoms_value_16": "Weight gain"
    },
    {
      "symptoms_value_17": "Change to skin, hair and nails"
    }, 
    {
      "symptoms_value_18": "None of these"
    }
  ]

  goalLookUp = [
    {
       "health_goals_value_1" : "Exercise more"
    },
    {
      "health_goals_value_2": "Improve diet or nutrition"
    },
    {
      "health_goals_value_3": "Quit smoking"
    },
    {
      "health_goals_value_4": "Improve sleep"
    },
    {
      "health_goals_value_5": "Improve mood or mental health"
    }, 
    {
      "health_goals_value_6": "Lose weight"
    },
    {
      "health_goals_value_7": "Reduce alcohol intake"
    }, 
    {
      "health_goals_value_8": "None of these"
    }
  ]

 doc = JsonFind(this.symptomsLookUp);
 doc2 = JsonFind(this.goalLookUp);

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(response => this.result = response);
    this.extractSymptoms(this.result.symptoms);
    this.lookUpGoals(this.result.health_goals);
    console.log(JSON.stringify(this.result.health_goals));
  }

  extractSymptoms(result: any) {
    result.forEach((symptom: any) => {
      console.log(this.doc.checkKey(symptom))
      this.symptoms.push(this.doc.checkKey(symptom))
    });
  }

  lookUpGoals(result: any) {
    result.forEach((goal: any) => {
      console.log(this.doc2.checkKey(goal))
      this.goals.push(this.doc2.checkKey(goal))
    });
  }

}

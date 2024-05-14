import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inappropriateKeywordsValidator } from '../../validators/keywords.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
  // feedback: Feedback = new Feedback('','',1,'','')
  feedbackForm: FormGroup;
  constructor(){
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl('',[Validators.required,Validators.email]),
      phoneNumber: new FormControl('',[Validators.required]),
      rate:new FormControl(8,[Validators.required]),
      feedbackTitle:new FormControl('',[Validators.required]),
      feedback:new FormControl('',[Validators.required,inappropriateKeywordsValidator(['spam','bot'])])
    })
  }
  ngOnInit(): void {
    
  }
  submitFeedback(){
    console.log(this.feedbackForm.value);
    
  }
}

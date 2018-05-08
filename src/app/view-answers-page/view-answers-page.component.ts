import { Component, OnInit } from '@angular/core';

import { QuizServiceService } from '../services/quiz-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';// for internal routing 
import { Location } from '@angular/common'

@Component({
  selector: 'app-view-answers-page',
  templateUrl: './view-answers-page.component.html',
  styleUrls: ['./view-answers-page.component.css']
})
export class ViewAnswersPageComponent implements OnInit {

  allQuestions: any;
  constructor(
    private quizService: QuizServiceService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getQuestionsAttemptedByUser()
  }
  getQuestionsAttemptedByUser() {
    this.quizService.getQuestionsAttemptedByUser()
      .subscribe((data) => {
        if (data.questions.length) {
          this.allQuestions = data.questions;
          console.log(">>", this.allQuestions)
        }
        else {
          console.log("some error")
        }
      })
  }

  resultsPage() {
    this.location.back()
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}

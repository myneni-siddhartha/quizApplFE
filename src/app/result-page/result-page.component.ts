import { Component, OnInit } from '@angular/core';

import { QuizServiceService } from '../services/quiz-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';// for internal routing 

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  result: any = {
    numberOfCorrectEntries: 0,
    numberOfEntries: 0
  };
  percentage: any;
  constructor(
    private quizService: QuizServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.viewResults();
  }

  viewResults() {
    console.log("asdas")
    this.quizService.getMarksOfUser()
      .subscribe((data) => {
        if (data.numberOfCorrectEntries) {
          this.result.numberOfCorrectEntries = data.numberOfCorrectEntries;
          this.result.numberOfEntries = data.numberOfEntries;
          this.percentage = (this.result.numberOfCorrectEntries / this.result.numberOfEntries) * 100;
          console.log(this.result, "", this.percentage)
        }
        else {
          console.log("some error")
        }
      })
  }

  viewAnswers() {
    this.router.navigateByUrl('/answers')
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}

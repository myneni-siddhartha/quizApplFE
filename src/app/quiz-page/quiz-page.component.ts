import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';// for internal routing 


declare var $: any
@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  questions: any;
  count = 0;
  length = 0;
  presentQuestion: any = {
    options: [
      {
        answer: ''
      }]
  };
  answer: any = {
    user: '',
    question: '',
    optionNumber: 1
  };
  option: any;
  constructor(private quizService: QuizServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    
    if(sessionStorage.testCompleted == 'true'){
      console.log("test completed")
      this.resultPage()
    }
    else{
      console.log("test not completed")      
      this.loadFirstQuestion();
    }

  }

  loadFirstQuestion() {
    this.quizService.loadAllQuestions().subscribe((data) => {
      this.questions = data;
      this.presentQuestion = this.questions[0];
      this.length = this.questions.length;
      this.count++;
      console.log(this.questions)
      console.log(this.presentQuestion)
    })
  }


  submit() {
    var as = $('input[name = option123]:checked').val()
    this.answer.optionNumber = $('input[name = option123]:checked').val()
    this.answer.user = sessionStorage.ID;
    this.answer.question = this.presentQuestion._id;
    // console.log(">>",as,this.presentQuestion._id,sessionStorage.ID)
    console.log(this.answer);
    this.quizService.answerToQuestion(this.answer)
      .subscribe((data) => {
        if (data.user) {
          console.log(data)
          if(this.count<this.length){
            console.log(this.count)
            this.presentQuestion = this.questions[this.count];   
            console.log(this.presentQuestion)   
            this.count++;               
          }
          else{
            sessionStorage.setItem('testCompleted','true');
            this.resultPage();
          }
        }
        else {
          alert("could not answer your question--> \nplease enter try again")
          console.log(data)
        }

      })
  }

  resultPage(){
    this.router.navigateByUrl('/result');    
  }
}

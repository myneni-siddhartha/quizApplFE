import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';// for internal routing 


import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent implements OnInit {
  data:any= {
    name: '',
    email: ''
  };
  id: Number;
  name: String;
  email: String;
  power: String;
  alterEgo?: String;
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  constructor(
    private quizService: QuizServiceService,
    private router: Router
  ) {
      // this.data.name = '';
      // this.data.email = '';

  }

  ngOnInit() {
    if(sessionStorage.ID!= null){
      this.goToQuiz()
    }
  }

  submitForm() {
    console.log("dsdsdfasdafds", this.name, this.email);
    this.data.name = this.name;
    this.data.email = this.email;
    this.quizService.addNewUser(this.data)
      .subscribe((data) => {
        if (data._id) {
          console.log(data)
          // alert("added the new user succesfully")
          this.goToQuiz();
          sessionStorage.setItem('ID', data._id);
        }
        else {
          alert("could not add the user--> \nplease enter valid data")
          console.log(data)
        }

      })
  }

  goToQuiz(){
    this.router.navigateByUrl('/quiz');    
  }

}

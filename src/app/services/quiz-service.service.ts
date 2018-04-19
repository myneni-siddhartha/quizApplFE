import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';




let headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class QuizServiceService {

  constructor(private http: Http) { }

  addNewUser(data) {
    return this.http.post(environment.baseURL + 'newUser', data, { headers: headers })
      .map(res => res.json());
  }

  loadAllQuestions() {
    return this.http.post(environment.baseURL + 'getAllQuestions', { headers: headers })
      .map(res => res.json());
  }

  answerToQuestion(data) {
    // data = JSON.parse(data)
    console.log("serviec", data)
    return this.http.post(environment.baseURL + 'userAnswerToQuestion', data, { headers: headers })
      .map(res => res.json());
  }

  getMarksOfUser() {
    var userId = sessionStorage.ID;
    return this.http.post(environment.baseURL + 'getMarksOfUser', { userId }, { headers: headers })
      .map(res => res.json());
  }

  getQuestionsAttemptedByUser() {
    var userId = sessionStorage.ID;
    return this.http.post(environment.baseURL + 'getQuestionsAttemptedByUser', { userId }, { headers: headers })
      .map(res => res.json());
  }

}

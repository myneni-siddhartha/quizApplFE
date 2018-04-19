import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';   
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';




// services
import { QuizServiceService } from './services/quiz-service.service';




import { NewUserPageComponent } from './new-user-page/new-user-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ViewAnswersPageComponent } from './view-answers-page/view-answers-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserPageComponent,
    QuizPageComponent,
    ResultPageComponent,
    ViewAnswersPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [QuizServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';

import { NewUserPageComponent } from './new-user-page/new-user-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ViewAnswersPageComponent } from './view-answers-page/view-answers-page.component';




export const routes:Routes =[
    
    {path:'',component: NewUserPageComponent },
    {path:'quiz',component: QuizPageComponent},
    {path:'result',component: ResultPageComponent},
    {path:'answers',component: ViewAnswersPageComponent}
    

]
export const routing :ModuleWithProviders = RouterModule.forRoot(routes);
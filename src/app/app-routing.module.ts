import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

const routes: Routes = 
[
  {path : '', component: TechnologiesComponent},
  {path :'Technologies', component :TechnologiesComponent},
  {path : 'Books', component : BooksComponent},
  {path : '**', component: WrongChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


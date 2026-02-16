import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { ListSuggestionComponent } from './suggestion-list/list-suggestion.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,  
    FormsModule,
    ReactiveFormsModule,  
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }

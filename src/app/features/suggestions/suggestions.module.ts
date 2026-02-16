import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { ListSuggestionComponent } from './suggestion-list/list-suggestion.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    SuggestionDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,  
    FormsModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }

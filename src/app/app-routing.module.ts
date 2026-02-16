import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Redirige l'ancienne route vers la nouvelle
  { path: 'listSuggestion', redirectTo: '/suggestions', pathMatch: 'full' },
  {
    path: 'suggestions',
    loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
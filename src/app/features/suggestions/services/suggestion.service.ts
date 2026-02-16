import { Injectable } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building', description: 'Suggestion pour organiser une journée de team building.', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee', nbLikes: 10 },
    { id: 2, title: 'Améliorer le système de réservation', description: 'Amélioration des réservations en ligne.', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee', nbLikes: 0 },
    { id: 3, title: 'Créer un système de récompenses', description: 'Programme de récompenses.', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee', nbLikes: 0 },
    { id: 4, title: 'Moderniser l’interface utilisateur', description: 'Refonte UI.', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente', nbLikes: 0 }
  ];

  getSuggestions(): Suggestion[] {
    return this.suggestions;
  }

  addSuggestion(suggestion: Suggestion): void {
    const maxId = this.suggestions.reduce((max, s) => s.id > max ? s.id : max, 0);
    suggestion.id = maxId + 1;
    this.suggestions.push(suggestion);
  }
}
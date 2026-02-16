import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | undefined;

  private suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building', description: 'Suggestion pour organiser une journée de team building.', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee', nbLikes: 10 },
    { id: 2, title: 'Améliorer le système de réservation', description: 'Amélioration des réservations en ligne.', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee', nbLikes: 0 },
    { id: 3, title: 'Créer un système de récompenses', description: 'Programme de récompenses.', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee', nbLikes: 0 },
    { id: 4, title: 'Moderniser l’interface utilisateur', description: 'Refonte UI.', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente', nbLikes: 0 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.suggestion = this.suggestions.find(s => s.id === id);
  }
}
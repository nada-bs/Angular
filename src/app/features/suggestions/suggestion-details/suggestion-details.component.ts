import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | undefined;
  currentIndex: number = -1;

  suggestions: Suggestion[] = [ // Plus de "private"
    { id: 1, title: 'Organiser une journée team building', description: '...', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee', nbLikes: 10 },
    { id: 2, title: 'Améliorer le système de réservation', description: '...', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee', nbLikes: 0 },
    { id: 3, title: 'Créer un système de récompenses', description: '...', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee', nbLikes: 0 },
    { id: 4, title: 'Moderniser l’interface utilisateur', description: '...', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente', nbLikes: 0 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

   ngOnInit(): void {
    // Souscrire aux changements de paramètres
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.currentIndex = this.suggestions.findIndex(s => s.id === id);
      this.suggestion = this.suggestions[this.currentIndex];
    });
  }

  next(): void {
    if (this.currentIndex < this.suggestions.length - 1) {
      const nextId = this.suggestions[this.currentIndex + 1].id;
      this.router.navigate(['/suggestions', nextId]);
    }
  }

  previous(): void {
    if (this.currentIndex > 0) {
      const prevId = this.suggestions[this.currentIndex - 1].id;
      this.router.navigate(['/suggestions', prevId]);
    }
  }
}
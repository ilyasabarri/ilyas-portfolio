import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  lang = inject(LanguageService);

  tickerItems = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Shopify', 'WordPress',
    'Meta Ads', 'TikTok Ads', 'Google Ads', 'Photoshop', 'Canva', 'CapCut', 'Figma',
    'COD Logistics', 'International Sourcing', 'Financial Analysis', 'Advanced Excel',
    'Cloudflare Pages', 'Google Analytics', 'Notion', 'Trello'];

  getCatIcon(name: string): string {
    const map: Record<string, string> = {
      'Web Development': '🖥️',
      'Développement Web': '🖥️',
      'E-commerce & Logistics': '🛒',
      'E-commerce & Logistique': '🛒',
      'Digital Marketing': '📣',
      'Marketing Digital': '📣',
      'Business & Finance': '📊',
      'Creative & Design': '🎨',
      'Créatif & Design': '🎨',
      'Tools & Platforms': '⚙️',
      'Outils & Plateformes': '⚙️',
    };
    return map[name] || '✦';
  }
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  lang = inject(LanguageService);

  screenshots = [
    '/assets/proj-darsakkinah.png',
    '/assets/proj-sinosource.png',
    '/assets/proj-ecobrique.png',
    '/assets/proj-product1libya.png',
    '/assets/proj-sewingmachine.png',
    '/assets/proj-chargingcable.png',
    '/assets/proj-darsakkinah-app.png',
  ];

  getScreenshot(i: number): string {
    return this.screenshots[i] || this.screenshots[0];
  }
}

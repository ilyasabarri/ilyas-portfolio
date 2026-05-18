import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  lang = inject(LanguageService);
  displayedSubtitle = signal('');
  private subtitles: string[] = [];
  private charIdx = 0;
  private subtitleIdx = 0;
  private isDeleting = false;
  private timerId: any;

  ngOnInit() {
    this.subtitles = this.lang.lang() === 'en'
      ? ['Full-Stack Developer', 'E-commerce Entrepreneur', 'Creative Builder']
      : ['Développeur Full-Stack', 'Entrepreneur E-commerce', 'Créateur Passionné'];
    this.typewriter();
  }

  private typewriter() {
    const current = this.subtitles[this.subtitleIdx];
    if (this.isDeleting) {
      this.displayedSubtitle.set(current.substring(0, this.charIdx - 1));
      this.charIdx--;
    } else {
      this.displayedSubtitle.set(current.substring(0, this.charIdx + 1));
      this.charIdx++;
    }

    let delay = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIdx === current.length) {
      delay = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.subtitleIdx = (this.subtitleIdx + 1) % this.subtitles.length;
      delay = 400;
    }

    this.timerId = setTimeout(() => this.typewriter(), delay);
  }

  ngOnDestroy() { clearTimeout(this.timerId); }
}

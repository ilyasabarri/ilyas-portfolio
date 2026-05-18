import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  isDark = signal<boolean>(this.loadPreference());

  constructor() {
    // Apply theme on init and whenever it changes
    effect(() => {
      this.applyTheme(this.isDark());
    });
  }

  toggle() {
    this.isDark.update(v => !v);
    localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
  }

  private loadPreference(): boolean {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) return saved === 'dark';
    // Default to dark, but respect OS preference if no saved value
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  }

  private applyTheme(dark: boolean) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
}

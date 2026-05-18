import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  lang = inject(LanguageService);
  name = signal('');
  email = signal('');
  message = signal('');
  sent = signal(false);

  onSubmit() {
    if (this.name() && this.email() && this.message()) {
      const mailto = `mailto:abarri.ilyas@gmail.com?subject=Portfolio Contact from ${this.name()}&body=${encodeURIComponent(this.message())}`;
      window.location.href = mailto;
      this.sent.set(true);
    }
  }
}

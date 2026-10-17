import { Component, computed, effect, signal } from '@angular/core';
import { CONTENT, Lang } from './i18n';

type Theme = 'dark' | 'light';

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage blocked (private mode etc.) - the choice just isn't remembered
  }
}

function initialLang(): Lang {
  const saved = readStored('lang');
  if (saved === 'en' || saved === 'fr') return saved;
  const browser = (navigator.language || 'en').slice(0, 2);
  return browser === 'fr' ? 'fr' : 'en';
}

function initialTheme(): Theme {
  const saved = readStored('theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Ghizlane Portfolio';

  readonly languages: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  lang = signal<Lang>(initialLang());
  theme = signal<Theme>(initialTheme());
  t = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      writeStored('lang', lang);
    });
    effect(() => {
      const theme = this.theme();
      document.documentElement.setAttribute('data-theme', theme);
      writeStored('theme', theme);
    });
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
  }

  toggleTheme() {
    this.theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }
}

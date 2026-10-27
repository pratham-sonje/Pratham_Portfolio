import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'ps_portfolio_user_theme';

  public currentTheme = signal<Theme>('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.currentTheme.set(savedTheme);
      } else {
        // Automatic scheduling as per Indian Standard Time (IST):
        // 9:00 PM (21:00) to 6:00 AM (06:00) -> Dark Mode
        // 6:00 AM (06:00) to 9:00 PM (21:00) -> Light Mode
        this.currentTheme.set(this.getAutoThemeByIndiaTime());
      }

      this.applyThemeToDocument(this.currentTheme());

      effect(() => {
        const theme = this.currentTheme();
        this.applyThemeToDocument(theme);
      });
    }
  }

  public toggleTheme(): void {
    const nextTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.currentTheme.set(nextTheme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, nextTheme);
    }
  }

  public setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, theme);
    }
  }

  /**
   * Calculates whether Dark Mode should be active according to Indian Standard Time (IST):
   * Dark Mode: 9:00 PM (21:00) to 6:00 AM (06:00)
   * Light Mode: 6:00 AM to 9:00 PM
   */
  public getAutoThemeByIndiaTime(): Theme {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false,
      });
      const istHour = parseInt(formatter.format(now), 10);
      const isNightTime = istHour >= 21 || istHour < 6;
      return isNightTime ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  }

  private applyThemeToDocument(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
  }
}

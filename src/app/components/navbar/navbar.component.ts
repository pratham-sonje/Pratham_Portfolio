import { Component, inject, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);
  private readonly portfolioService = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly portfolio = this.portfolioService.portfolio;
  public readonly isDark = signal<boolean>(false);
  public isScrolled = signal<boolean>(false);
  public mobileMenuOpen = signal<boolean>(false);
  public activeSection = signal<string>('hero');

  public navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  constructor() {
    this.isDark.set(this.themeService.currentTheme() === 'dark');
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDark.set(this.themeService.currentTheme() === 'dark');
  }

  public toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.mobileMenuOpen() ? 'hidden' : '';
    }
  }

  public closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  public scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();

    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.activeSection.set(sectionId);
      }
    }
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollY = window.scrollY;
    this.isScrolled.set(scrollY > 20);

    // Active section detection
    const sections = ['contact', 'education', 'skills', 'projects', 'experience', 'about', 'hero'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }
}

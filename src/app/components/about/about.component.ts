import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private readonly portfolioService = inject(PortfolioService);
  public readonly portfolio = this.portfolioService.portfolio;

  public pillars = [
    {
      icon: 'code',
      title: 'Reusable Angular Architecture',
      description:
        'Designing standalone components and Reactive Forms within modular service-based architectures, eliminating duplicate code and speeding up delivery.',
    },
    {
      icon: 'layers',
      title: 'Reactive Streams & APIs',
      description:
        'Deep expertise in REST APIs via HttpClient, RxJS Observables, HTTP interceptors, centralized error handling, and seamless migrations to GraphQL.',
    },
    {
      icon: 'sparkles',
      title: 'Cross-Platform Mobile & Canvas',
      description:
        'Building responsive Android & web apps with Ionic & Capacitor, geolocation pinpoints, JWT authentication, and Fabric.js canvas optimizations.',
    },
    {
      icon: 'database',
      title: 'Database & Performance Tuning',
      description:
        'Optimizing database queries across PostgreSQL, MongoDB, and MySQL to decrease latency, improve production reliability, and support CI/CD.',
    },
  ];
}


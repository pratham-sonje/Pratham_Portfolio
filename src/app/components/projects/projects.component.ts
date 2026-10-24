import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  private readonly portfolioService = inject(PortfolioService);
  public readonly portfolio = this.portfolioService.portfolio;

  public activeCategory = signal<string>('All');

  public categories = ['All', 'Enterprise', 'Full-Stack', 'Mobile'];

  public filteredProjects = computed(() => {
    const cat = this.activeCategory();
    const all = this.portfolio().projects;
    if (cat === 'All') return all;
    return all.filter((p) => p.category === cat);
  });

  public setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }
}

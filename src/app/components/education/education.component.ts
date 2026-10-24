import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  private readonly portfolioService = inject(PortfolioService);
  public readonly portfolio = this.portfolioService.portfolio;
}


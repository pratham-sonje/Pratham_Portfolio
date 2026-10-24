import { Injectable, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly _portfolio = signal<PortfolioData>(PORTFOLIO_DATA);

  public readonly portfolio = this._portfolio.asReadonly();

  public getResumeUrl(): string {
    return this._portfolio().resumeFilePath;
  }
}


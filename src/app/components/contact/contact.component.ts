import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private readonly portfolioService = inject(PortfolioService);
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly portfolio = this.portfolioService.portfolio;

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  public isSubmitting = signal<boolean>(false);
  public submitSuccess = signal<boolean>(false);
  public emailCopied = signal<boolean>(false);
  public phoneCopied = signal<boolean>(false);

  public copyToClipboard(text: string, type: 'email' | 'phone'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2500);
      } else {
        this.phoneCopied.set(true);
        setTimeout(() => this.phoneCopied.set(false), 2500);
      }
    });
  }

  public onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const { name, email, subject, message } = this.contactForm.value;

    // Direct mailto trigger fallback
    const mailtoUrl = `mailto:${this.portfolio().email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} - from ${name}`
    )}&body=${encodeURIComponent(
      `Hi Pratham,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
    )}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(mailtoUrl, '_blank');
    }

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.contactForm.reset();
      setTimeout(() => this.submitSuccess.set(false), 6000);
    }, 600);
  }
}


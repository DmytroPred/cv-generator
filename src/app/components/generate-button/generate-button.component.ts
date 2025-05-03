import { Component } from '@angular/core';
import { PdfGeneratorService } from '../../services/pdf-generator.service';

@Component({
  selector: 'app-generate-button',
  templateUrl: './generate-button.component.html',
  styleUrl: './generate-button.component.scss',
})
export class GenerateButtonComponent {
  constructor(private pdfGeneratorService: PdfGeneratorService) {}

  triggerCvGeneration(): void {
    const pages = document.getElementById('cv-content');

    if (!pages) {
      return;
    }

    this.pdfGeneratorService.generatePdf(pages);
  }
}

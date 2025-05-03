import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  generatePdf(pages: HTMLElement): void {
    const doc = new jsPDF({
      unit: 'px',
      format: [595, 842],
    });

    doc.html(pages, {
      callback: (doc: jsPDF) => doc.save('pdf-export'),
    });
  }
}

import { Injectable } from '@angular/core';
import jsPDF, { HTMLFontFace } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  private materialIconsFont: HTMLFontFace = {
    family: 'Material Icons',
    style: 'normal',
    weight: 'normal',
    src: [
      {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/mdui/0.1.2/icons/material-icons/MaterialIcons-Regular.ttf',
        format: 'truetype',
      },
    ],
  };

  constructor() {}

  generatePdf(pages: HTMLElement): void {
    const doc = new jsPDF({
      unit: 'px',
      format: [628, 2340],
    });

    doc.html(pages, {
      callback: (doc: jsPDF) => doc.save('Dmytro_Prechyshyn_CV'),
      fontFaces: [this.materialIconsFont],
    });
  }
}

import { Component, Input } from '@angular/core';
import { ISummary } from '../../../../models/cv-sections.interfaces';

@Component({
  selector: 'app-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrl: './cv-summary.component.scss',
})
export class CvSummaryComponent {
  @Input() summary?: ISummary;
}

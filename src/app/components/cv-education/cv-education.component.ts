import { Component, Input } from '@angular/core';
import { IEducation } from '../../models/cv-sections.interfaces';

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrl: './cv-education.component.scss',
})
export class CvEducationComponent {
  @Input() educationSection?: IEducation;
}

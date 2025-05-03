import { Component, Input } from '@angular/core';
import { IExperienceSection } from '../../../../models/cv-sections.interfaces';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './cv-experience.component.html',
  styleUrl: './cv-experience.component.scss',
})
export class CvExperienceComponent {
  @Input() experienceSection?: IExperienceSection;
}

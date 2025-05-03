import { Component, Input } from '@angular/core';
import { ISkill } from '../../../../models/cv-sections.interfaces';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrl: './cv-skills.component.scss',
})
export class CvSkillsComponent {
  @Input() skillSection?: ISkill;
}

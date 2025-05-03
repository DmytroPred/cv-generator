import { Component, Input } from '@angular/core';
import { IGeneralInfo } from '../../../../models/cv-sections.interfaces';

@Component({
  selector: 'app-cv-general',
  templateUrl: './cv-general.component.html',
  styleUrl: './cv-general.component.scss',
})
export class CvGeneralComponent {
  @Input() generalInfo?: IGeneralInfo;
}

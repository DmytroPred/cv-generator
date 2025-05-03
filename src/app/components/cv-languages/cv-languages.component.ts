import { Component, Input } from '@angular/core';
import { ILanguage } from '../../models/cv-sections.interfaces';

@Component({
  selector: 'app-cv-languages',
  templateUrl: './cv-languages.component.html',
  styleUrl: './cv-languages.component.scss',
})
export class CvLanguagesComponent {
  @Input() languageSection?: ILanguage;
}

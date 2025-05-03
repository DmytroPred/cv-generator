import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateCVComponent } from './components/generate-cv/generate-cv.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CvExperienceComponent } from './components/cv-experience/cv-experience.component';
import { CvGeneralComponent } from './components/cv-general/cv-general.component';
import { CvSkillsComponent } from './components/cv-skills/cv-skills.component';
import { CvLanguagesComponent } from './components/cv-languages/cv-languages.component';
import { CvEducationComponent } from './components/cv-education/cv-education.component';
import { CvSummaryComponent } from './components/cv-summary/cv-summary.component';

@NgModule({
  declarations: [
    GenerateCVComponent,
    CvExperienceComponent,
    CvGeneralComponent,
    CvSkillsComponent,
    CvLanguagesComponent,
    CvEducationComponent,
    CvSummaryComponent,
    AppComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

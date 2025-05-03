import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateCVComponent } from './pages/generate-cv/generate-cv.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CvExperienceComponent } from './pages/generate-cv/components/cv-experience/cv-experience.component';
import { CvGeneralComponent } from './pages/generate-cv/components/cv-general/cv-general.component';
import { CvSkillsComponent } from './pages/generate-cv/components/cv-skills/cv-skills.component';
import { CvLanguagesComponent } from './pages/generate-cv/components/cv-languages/cv-languages.component';
import { CvEducationComponent } from './pages/generate-cv/components/cv-education/cv-education.component';
import { CvSummaryComponent } from './pages/generate-cv/components/cv-summary/cv-summary.component';
import { GenerateButtonComponent } from './components/generate-button/generate-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    GenerateButtonComponent,
    GenerateCVComponent,
    CvExperienceComponent,
    CvGeneralComponent,
    CvSkillsComponent,
    CvLanguagesComponent,
    CvEducationComponent,
    CvSummaryComponent,
    AppComponent,
  ],
  imports: [CommonModule, AppRoutingModule, NgbModule, NgbTooltipModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

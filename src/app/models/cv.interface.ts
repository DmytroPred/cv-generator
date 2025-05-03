import {
  IEducation,
  IExperienceSection,
  IGeneralInfo,
  ILanguage,
  ISkill,
  ISummary,
} from './cv-sections.interfaces';

export interface ICV {
  general: IGeneralInfo;
  summary: ISummary;
  skillSection: ISkill;
  educationSection: IEducation;
  languageSection: ILanguage;
  experienceSection: IExperienceSection;
}

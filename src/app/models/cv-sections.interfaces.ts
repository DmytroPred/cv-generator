export interface IGeneralInfo {
  name: string;
  position: string;
  email: string;
  birthDate: string;
  linkedin: string;
}

export interface ISummary extends ITitle {
  description: string;
}

export interface ISkill extends ITitle {
  sections: {
    title: string;
    skills: string[];
  }[];
}

export interface IEducation extends ITitle {
  educations: {
    name: string;
    years: string;
  }[];
}

export interface ILanguage extends ITitle {
  languages: {
    name: string;
    level: string;
  }[];
}

export interface IExperienceSection extends ITitle {
  experience: IExperience[];
}

export interface IExperience {
  position: string;
  company: string;
  length: string;
  summary: string;
  technologies: string[];
  respTitle?: string;
  responsibilities?: string[];
}

export interface ITitle {
  title: string;
}

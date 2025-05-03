import { Component } from '@angular/core';
import { ICV } from '../../models/cv.interface';

@Component({
  selector: 'app-generate-cv',
  templateUrl: './generate-cv.component.html',
  styleUrl: './generate-cv.component.scss',
})
export class GenerateCVComponent {
  cv: ICV = {
    general: {
      name: 'Dmytro Predchyshyn',
      position: 'Frontend Developer',
      email: 'predchishindmytro@gmail.com',
      birthDate: '07/11/1995',
    },

    summary: {
      title: 'Professional summary',
      description: `
        Motivated programmer with 3 years front-end development experience.
        I have deep knowledge in HTML, CSS, SCSS, JavaScript and Typescript. 
        I have commercial experience working with Angular and React. 
        Developed dozens of pages with complicated functionalities. 
        Worked with RxJS/Signals and Redux to manage application state.
      `,
    },

    skillSection: {
      title: 'Skills & Abilities',
      sections: [
        {
          title: 'Skills',
          skills: [
            'Problem-Solving',
            'Communication',
            'Responsibility',
            'Creativity',
            'Self-organization',
          ],
        },
        {
          title: 'Frameworks/Libraries',
          skills: [
            'Angular',
            'Angular Material',
            'RxJS',
            'React',
            'Redux',
            'Axios',
          ],
        },
        {
          title: 'Technologies/Databases',
          skills: ['Firebase', 'REST', 'HTTP', 'Bootstrap'],
        },
        {
          title: 'Others',
          skills: ['Git', 'GitHub', 'Figma'],
        },
      ],
    },

    educationSection: {
      title: 'Education',
      educations: [
        {
          name: "Kitsman College of Podolskiy State Agricultural and Technical University, Bachelor's degree, Land Management",
          years: '2014 - 2016',
        },
        {
          name: "National University Lviv Polytechnic, Master's degree Automation and computer- integrated technologies",
          years: '2018 - 2020',
        },
      ],
    },

    languageSection: {
      title: 'Languages',
      languages: [
        {
          name: 'English',
          level: 'Intermediate',
        },
        {
          name: 'Ukrainian',
          level: 'Proficiency',
        },
      ],
    },

    experienceSection: {
      title: 'Project Experience',
      experience: [
        {
          position: 'Frontend Developer',
          company: 'Qpercom (Ireland)',
          length: '11 months',
          summary: `
          Qpercom is a digital scoring and virtual assessment system that makes examinations, interviews and recruitment easier, faster and more reliable.
          I successfully designed and implemented student portfolio flow with reliable media center. 
          Reinvent several crucial pages with new technologies and enchance UI/UX. 
          Implemented UI and Prompt for AI functionality.`,
          technologies: ['Angular', 'JQuery', 'PHP', 'React', 'Node.js', 'Vue'],
          respTitle: 'My responsibilities:',
          responsibilities: [
            'Remake legacy pages with new technologies',
            'Design UI/UX',
            'Integrate AI requests',
            'Prompt engineering',
            'Bug fixing',
          ],
        },
        {
          position: 'React Developer',
          company: 'ZasJobs (Spain)',
          length: '6 months',
          summary: `
          Zasjobs is a vacancy platform which use AI for fetching data from uploaded cv and matching.
          Whenever candidate assign to offer, company get brief compatability data that generated via AI which compare cv and offer requirements.
          Company could also request deep matching which use advanced AI model.`,
          technologies: ['React', 'Redux', 'Formik', 'Axios', 'Typescript'],
          respTitle: 'My responsibilities were:',
          responsibilities: [
            'Integration AI requests',
            'Live chat implementation',
            'Develop UI for desktop/mobile',
            'Sign-up flow implemetation',
          ],
        },
        {
          position: 'Angular Developer',
          company: 'Medatus (Germany)',
          length: '8 months',
          summary: `
            Medatus is a German search engine that helps finding healthcare information using
            quiz. Project designed to help users find best specialists via rating that forms after
            questioning. Companies or specialists could use platform for advertising their services to
            potential customers.`,
          technologies: ['Angular', 'RxJS'],
          respTitle:
            'I was writing the project from scratch, so my responsibilities were:',
          responsibilities: [
            'Design and architecture',
            'Pages development',
            'Animations integration',
            'Bug fixing',
            'SEO optimization',
          ],
        },

        {
          position: 'Angular Developer',
          company: 'Task Management App (Ukraine)',
          length: '10 months',
          summary: `
            I was working under internal task management platform for software development
            agency. Project was very similar to Trello app. It allows creating dynamic dashboard and
            tasks. Project was using a lot of drag & drop components (like statuses, tasks etc.)`,
          technologies: ['RxJS', 'Firebase', 'HTML', 'Angular', 'Scss'],
          respTitle:
            'I was the only one developer on the project, so I was working under design and architecture.',
          responsibilities: [
            'Feature development',
            'Design and architecture',
            'Bug fixing',
            'Writing unit tests',
          ],
        },

        {
          position: 'Frontend Developer',
          company: 'WIKI project (Ukraine)',
          length: '6 months',
          summary: `
            Project task was to develop a web application that can be used in the company as a wiki page for the company.`,
          technologies: ['Angular', 'Firebase', 'SCSS', 'Rest'],
          respTitle:
            'I was writing the project from scratch, so my responsibilities were:',
          responsibilities: [
            'Design and architecture',
            'Pages development',
            'Animations integration',
            'Bug fixing',
            'SEO optimization',
          ],
        },
      ],
    },
  };
}

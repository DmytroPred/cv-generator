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
      linkedin: 'www.linkedin.com/in/dmytro-predchyshyn-a13a9322b',
    },

    summary: {
      title: 'Professional summary',
      description: `
        Result-driven Frontend Developer with 3 years of hands-on experience implementing dynamic, user-friendly web applications.
        Proficient in modern JavaScript frameworks including Angular and React, with a foundation in jQuery for legacy support.
        Developed dozens of pages with complicated functionalities. 
        Commited to delivering scalable and maintainable code that enhances user experience and meets business goals.
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
          skills: ['Angular', 'Angular Material', 'React', 'Redux', 'JQuery'],
        },
        {
          title: 'Technologies/Databases',
          skills: ['Firebase', 'REST', 'HTTP', 'Bootstrap'],
        },
        {
          title: 'Others',
          skills: ['Git', 'GitHub', 'Figma', 'Jira'],
        },
      ],
    },

    educationSection: {
      title: 'Education',
      educations: [
        {
          name: "National University Lviv Polytechnic, Master's degree Automation and computer- integrated technologies",
          years: '2018 - 2020',
        },
        {
          name: "Kitsman College of Podolskiy State Agricultural and Technical University, Bachelor's degree, Land Management",
          years: '2014 - 2016',
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
            Qpercom - Digital Assessment Platform.
            Technologies: Angular, React, Vue, Node.js, PHP, jQuery`,
          technologies: [
            'Led the design and implementation of the student portfolio workflow, including integration with a robust media center for reliable content handling.',
            'Modernized critical legacy pages using modern frontend frameworks, significantly improving performance and user engagement.',
            'Enhanced UI/UX across multiple modules with a focus on accessibility, responsiveness, and consistency.',
            'Integrated AI functionality, including UI components and prompt engineering for intelligent user interactions.',
            'Collaborated cross-functionally to troubleshoot and resolve complex bugs, ensuring system stability and a smooth user experience.',
          ],
        },
        {
          position: 'React Developer',
          company: 'ZasJobs (Spain)',
          length: '6 months',
          summary: `
          Zasjobs - AI-Powered Recruitment Platform. Technologies: React, Redux, TypeScript, Formik, Axios`,
          technologies: [
            'Developed responsive, user-friendly interfaces for both desktop and mobile platforms, ensuring seamless candidate and recruiter experiences.',
            'Implemented the full sign-up and onboarding flow, enhancing user engagement and streamlining access to platform features.',
            'Integrated AI-driven features that matched candidate CVs with job offers, including real-time compatibility scoring and advanced deep matching requests.',
            'Built and integrated a live chat system to improve real-time communication between candidates and employers.',
            'Collaborated closely with backend teams to design robust API interactions and maintain efficient state management using Redux.',
          ],
        },
        {
          position: 'Angular Developer',
          company: 'Medatus (Germany)',
          length: '8 months',
          summary: `
            Medatus - Healthcare Search Engine (Germany).
            Technologies: Angular, RxJS`,
          technologies: [
            'Led frontend development from the ground up, designing the architecture and establishing the project’s foundational structure.',
            'Built dynamic, interactive pages using Angular, with a focus on smooth animations and responsive user interfaces.',
            'Integrated quiz-based flows to guide users toward top-rated healthcare specialists based on personalized input.',
            'Implemented SEO optimization strategies to improve platform visibility and search engine ranking.',
            'Collaborated with product and design teams to refine features and ensure a seamless user experience across devices.',
            'Proactively identified and resolved bugs throughout the development cycle to maintain high code quality and platform stability.',
          ],
        },

        {
          position: 'Angular Developer',
          company: 'Task Management App (Ukraine)',
          length: '10 months',
          summary: `
            Internal Task Management Platform - Trello-like App for a Software Agency. Technologies: Angular, RxJS, Firebase, SCSS, HTML`,
          technologies: [
            'Led end-to-end frontend development of a dynamic task and dashboard management platform, closely modeled after Trello.',
            'Designed and architected the application from scratch, implementing scalable component structures and efficient state management using RxJS.',
            'Developed intuitive drag-and-drop functionality for tasks, statuses, and boards, enhancing user interaction and workflow customization.',
            'Integrated Firebase for real-time updates and data synchronization across the platform.',
            'Built responsive, mobile-friendly UIs with SCSS, ensuring a consistent experience across devices.',
            'Wrote comprehensive unit tests to ensure code quality and maintainability.',
            'Independently managed feature development, bug fixing, and performance optimization.',
          ],
        },

        {
          position: 'Frontend Developer',
          company: 'WIKI project (Ukraine)',
          length: '6 months',
          summary: `
            Internal Company Wiki - Knowledge Management Platform. Technologies: Angular, Firebase, REST APIs, SCSS`,
          technologies: [
            'Designed and developed a fully responsive internal wiki application from the ground up to centralize company knowledge and documentation.',
            'Created the application architecture, component structure, and service layers using Angular and Firebase for real-time content management.',
            'Developed multiple pages with intuitive navigation and smooth animations to enhance user experience and engagement.',
            'Implemented SEO best practices to ensure optimized content indexing for internal search engines and improved discoverability.',
            'Resolved UI bugs and performance issues to ensure a stable, consistent experience across browsers and devices.',
          ],
        },
      ],
    },
  };
}

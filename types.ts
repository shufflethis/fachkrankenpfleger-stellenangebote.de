export interface JobOffer {
  id: string;
  title: string;
  hospital: string;
  location: string;
  salary: string;
  tags: string[];
  description: string;
  postedDate: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionType {
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee',
  INTERNSHIP = 'internship',
  VIDEO = 'video',
  AI_TOOL = 'ai-tool'
}
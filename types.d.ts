export interface ExperienceData {
  startDate: string;
  endDate: string;
  workplace: string;
  workplaceUrl: string;
  positionTitle: string;
  description: string;
  technologies: string[];
  links: Array<{ url: string; title: string }>;
}

export interface ProjectData {
  title: string;
  projectUrl: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  thumbnailUrl: string;
  slug: string;
  timeFrame: string;
}

export interface ExperienceItemData {
  startDate: string;
  endDate: string;
  workplace: string;
  workplaceUrl: string;
  positionTitle: string;
  description: string;
  technologies: string[];
  links: Array<{ url: string; title: string }>;
}

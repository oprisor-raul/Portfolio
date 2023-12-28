import React from "react";
import ExperienceItemTitleAndPosition from "./ExperienceItemTitleAndPosition";
import ListTechnologies from "./ListTechnologies";
import ListLinks from "./ListLinks";
import { ExperienceItemData } from "@/types";

const ExperienceItem: React.FC<ExperienceItemData> = ({
  startDate,
  endDate,
  workplace,
  workplaceUrl,
  positionTitle,
  description,
  technologies,
  links,
}) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-vague sm:col-span-2">
          {startDate} — {endDate}
        </header>
        <div className="z-10 sm:col-span-6">
          <ExperienceItemTitleAndPosition
            workplace={workplace}
            workplaceUrl={workplaceUrl}
            positionTitle={positionTitle}
          />
          <p className="mt-2 text-sm text-vague leading-normal">
            {description}
          </p>
          <ListLinks links={links} />
          <ListTechnologies technologies={technologies} />
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;

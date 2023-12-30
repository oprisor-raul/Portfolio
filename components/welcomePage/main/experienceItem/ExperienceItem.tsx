import React from "react";
import ExperienceItemTitleAndPosition from "./ExperienceItemTitleAndPosition";
import ListTechnologies from "../../../common/ListTechnologies";
import ListLinks from "../../../common/ListLinks";
import { ExperienceData } from "@/types";
import HoverHighlightCard from "../HoverHighlightCard";

const ExperienceItem: React.FC<ExperienceData> = ({
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
    <HoverHighlightCard>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-vague sm:col-span-2">
        {startDate} — {endDate}
      </header>
      <div className="z-10 sm:col-span-6">
        <ExperienceItemTitleAndPosition
          workplace={workplace}
          workplaceUrl={workplaceUrl}
          positionTitle={positionTitle}
        />
        <p className="mt-2 text-sm text-vague leading-normal">{description}</p>
        <ListLinks links={links} />
        <ListTechnologies technologies={technologies} />
      </div>
    </HoverHighlightCard>
  );
};

export default ExperienceItem;

import React from "react";
import MobileHeader from "./MobileSectionHeader";
import ExperienceItem from "./experienceItem/ExperienceItem";
import { experienceData } from "../../../data/experienceData";
import Href from "./Href";

function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <MobileHeader title="EXPERIENCE" />
      <ol className="group/list">
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            startDate={item.startDate}
            endDate={item.endDate}
            workplace={item.workplace}
            workplaceUrl={item.workplaceUrl}
            positionTitle={item.positionTitle}
            description={item.description}
            technologies={item.technologies}
            links={item.links}
          />
        ))}
      </ol>
      <Href href="/resume.pdf" title="View Full Resume" />
    </section>
  );
}

export default Experience;

import React from "react";
import MobileHeader from "../../common/MobileSectionHeader";
import Href from "../../common/Href";
import ProjectItem from "./ProjectItem";
import featuredProjectData from "@/data/featuredProjectData";

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
      aria-label="Projects"
    >
      <MobileHeader title="PROJECTS" />
      <ol className="group/list">
        {featuredProjectData.map((item, index) => (
          <ProjectItem
            key={index}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
            shortDescription={item.shortDescription}
            technologies={item.technologies}
            thumbnailUrl={item.thumbnailUrl}
            slug={item.slug}
            timeFrame={item.timeFrame}
            links={item.links}
          />
        ))}
      </ol>
      <Href href="/projects" title="View All Projects" />
    </section>
  );
}

export default Projects;

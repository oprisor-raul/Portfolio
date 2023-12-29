import { ProjectData } from "@/types";
import React from "react";
import HoverHighlightCard from "../../common/HoverHighlightCard";
import SvgTopArrow from "@/public/svg/SvgTopArrow";
import Image from "next/image";
import ListTechnologies from "../../common/ListTechnologies";

const ProjectItem: React.FC<ProjectData> = ({
  title,
  projectUrl,
  description,
  technologies,
  thumbnailUrl,
  slug,
}) => {
  return (
    <HoverHighlightCard>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary group/link"
            href={projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={title}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <SvgTopArrow
                fill="#EBEAEE"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <ListTechnologies technologies={technologies} />
      </div>
      <Image
        className="mt-6 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 sm:mt-0"
        src={thumbnailUrl}
        alt={title}
        width={600}
        height={150}
        quality={100}
      />
    </HoverHighlightCard>
  );
};

export default ProjectItem;

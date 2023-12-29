import React from "react";
import SvgTopArrow from "@/public/svg/SvgTopArrow";

interface ExperienceItemTitleAndPositionProps {
  workplace: string;
  workplaceUrl: string;
  positionTitle: string;
}

const ExperienceItemTitleAndPosition: React.FC<
  ExperienceItemTitleAndPositionProps
> = ({ workplace, workplaceUrl, positionTitle }) => {
  return (
    <h3 className="font-medium leading-snug text-text">
      <div>
        <a
          className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary group/link"
          href={workplaceUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>
            <span className="inline-block">
              {workplace}
              <SvgTopArrow
                fill="#EBEAEE"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              />
            </span>
          </span>
        </a>
      </div>
      <div>
        <div className="text-vague" aria-hidden="true">
          {positionTitle}
        </div>
      </div>
    </h3>
  );
};

export default ExperienceItemTitleAndPosition;

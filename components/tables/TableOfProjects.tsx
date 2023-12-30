import React from "react";
import TableOfContent from "./TableOfContent";
import { projectData } from "@/data/projectData";
import ListTechnologies from "../common/ListTechnologies";
import SvgTopArrow from "@/public/svg/SvgTopArrow";

function TableOfProjects() {
  const defaultStyle = "py-4 pr-4 align-top text-sm";
  return (
    <TableOfContent
      headings={[
        { text: "Timeframe" },
        { text: "Project" },
        { text: "Description", className: "hidden sm:table-cell" },
        { text: "Built With", className: "hide-under-375px sm:table-cell" },
      ]}
    >
      {projectData.map((item, index) => (
        <tr
          key={index}
          className="border-b border-slate-300/10 last:border-none"
        >
          <td className={`${defaultStyle} text-vague`}>{item.timeFrame}</td>
          <td className={`${defaultStyle} text-text`}>
            <a
              href={item.projectUrl}
              className="group inline-flex items-center hover:text-primary focus-visible:text-primary"
              aria-label={`${item.title} (opens in a new tab)`}
            >
              <span className="group-hover:text-primary">{item.title}</span>
              <SvgTopArrow
                fill="#EBEAEE"
                className="ml-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </td>
          <td className={`${defaultStyle} text-vague hidden sm:table-cell`}>
            {item.shortDescription}
          </td>
          <td className={`${defaultStyle} hide-under-375px sm:table-cell`}>
            <ListTechnologies technologies={item.technologies} />
          </td>
        </tr>
      ))}
    </TableOfContent>
  );
}

export default TableOfProjects;

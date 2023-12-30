import React from "react";
import TableOfContent from "./TableOfContent";
import { projectData } from "@/data/projectData";
import ListTechnologies from "../common/ListTechnologies";

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
              className="hover:text-primary focus-visible:text-primary"
            >
              {item.title}
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

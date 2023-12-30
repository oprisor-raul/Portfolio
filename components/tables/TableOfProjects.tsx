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
        { text: "Description" },
        { text: "Built With" },
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
          <td className={`${defaultStyle} text-vague`}>
            {item.shortDescription}
          </td>
          <td className={`${defaultStyle}`}>
            <ListTechnologies technologies={item.technologies} />
          </td>
        </tr>
      ))}
    </TableOfContent>
  );
}

export default TableOfProjects;

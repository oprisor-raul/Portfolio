import React from "react";

interface ListTechnologiesProps {
  technologies: string[];
}

const ListTechnologies: React.FC<ListTechnologiesProps> = ({
  technologies,
}) => {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {technologies.map((technology, index) => (
        <li key={index} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
            {technology}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListTechnologies;

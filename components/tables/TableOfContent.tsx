import React from "react";

interface TableHeading {
  text: string;
  className?: string;
}

interface CustomTableProps {
  headings: TableHeading[];
  children: React.ReactNode;
}

function TableOfContent({ headings, children }: CustomTableProps) {
  return (
    <table className="mt-12 w-full border-collapse text-left ">
      <thead className="bg-background sticky top-0 z-10 border-b border-slate-300/5  px-6 py-5 backdrop-blur">
        <tr>
          {headings.map((heading, index) => (
            <th
              key={index}
              className={`py-4 pr-8 text-sm font-semibold text-text ${
                heading.className || ""
              }`}
            >
              {heading.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default TableOfContent;

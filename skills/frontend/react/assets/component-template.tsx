"use client";

import { FC } from "react";

interface Props {
  title: string;
}

const ComponentTemplate: FC<Props> = ({ title }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>This is a reusable React component template.</p>
    </div>
  );
};

export default ComponentTemplate;

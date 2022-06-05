import React from 'react';
import FeatureTech from './FeatureTech';
interface dataProps {
  data: {
    name: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
  };
}
export default function RegularProj({ data }: dataProps) {
  return (
    <div className="flex flex-col p-6 text-left bg-navyBlue space-y-7">
      <h3 className="font-bold">{data.name}</h3>
      <p className="flex-1 text-base">{data.description}</p>
      <div className="text-sm flex flex-wrap">
        {data.tech.map((tech) => (
          <FeatureTech key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}

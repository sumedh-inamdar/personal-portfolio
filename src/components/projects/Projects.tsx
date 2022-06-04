import React from 'react';
import { featuredProjects } from '../../constants';
import FeatureProj from './FeatureProj';

export default function Projects() {
  return (
    <section>
      <div className="flex items-center w-full mb-6">
        <h2 className="text-3xl font-bold tracking-tighter mr-4">Projects</h2>
        <div className="flex-1 h-px bg-gold"></div>
      </div>
      <ul className="my-12 md:my-24 space-y-20">
        {featuredProjects.map((project) => (
          <FeatureProj key={project.name} data={project} />
        ))}
      </ul>
    </section>
  );
}

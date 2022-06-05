import React from 'react';
import { featuredProjects, regularProjects } from '../../constants';
import FeatureProj from './FeatureProj';
import RegularProj from './RegularProj';

export default function Projects() {
  return (
    <section>
      <div className="flex items-center w-full mb-6">
        <h2 className="text-3xl font-bold tracking-tighter mr-4">Projects</h2>
        <div className="flex-1 h-px bg-gold"></div>
      </div>
      <ul className="my-12 md:my-24 md:mb-12 space-y-0 md:space-y-20">
        {featuredProjects.map((project) => (
          <FeatureProj key={project.name} data={project} />
        ))}
      </ul>
      <div className="space-y-6 mb-6">
        <h2 className="text-2xl font-bold tracking-tighter w-full text-center">
          Other Notable Projects
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {regularProjects.map((project) => (
            <RegularProj key={project.name} data={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

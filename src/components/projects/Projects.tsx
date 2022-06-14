import React, { useState } from 'react';
import { featuredProjects, regularProjects } from '../../constants';
import FeatureProj from './FeatureProj';
import RegularProj from './RegularProj';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [inViewRef1, inView1] = useInView();
  const [inViewRef2, inView2] = useInView();
  return (
    <section id="projects">
      <div className="min-h-[36px]" ref={inViewRef1}>
        {inView1 && <SectionHeader title="Projects" />}
      </div>
      <ul className="my-12 md:my-16 md:mb-12 space-y-0 md:space-y-20">
        {featuredProjects.map((project) => (
          <FeatureProj key={project.name} data={project} />
        ))}
      </ul>
      <div ref={inViewRef2} className="space-y-6 mb-12 md:mb-16">
        {inView2 && (
          <h2 className="animateFadeinUp opacity-0 text-2xl font-bold tracking-tighter w-full text-center">
            Other Notable Projects
          </h2>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.slice(0, 3).map((project) => (
            <RegularProj key={project.name} data={project} />
          ))}
          {showMore &&
            regularProjects
              .slice(3)
              .map((project) => (
                <RegularProj key={project.name} data={project} />
              ))}
        </ul>
        <div className="flex justify-center">
          {showMore ? (
            <button
              className="btn-primary"
              onClick={() => setShowMore(!showMore)}>
              Show Less
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={() => setShowMore(!showMore)}>
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

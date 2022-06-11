import React from 'react';
import { brandIcons } from '../../constants';
import SkillItem from './SkillItem';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });
  return (
    <section id="skills">
      <div className="min-h-[400px]" ref={ref}>
        {inView && (
          <div>
            <SectionHeader title="Skills" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 my-12 md:my-16">
              {brandIcons.map((icon) => (
                <SkillItem key={icon.name} name={icon.name} src={icon.src} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

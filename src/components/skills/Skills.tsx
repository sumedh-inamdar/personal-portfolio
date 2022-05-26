import React from 'react';
import { brandIcons } from '../../constants';
import SkillItem from './SkillItem';

export default function Skills() {
  return (
    <section>
      <div className="flex items-center w-full mb-6">
        <h2 className="text-3xl font-bold tracking-tighter mr-4">Skillset</h2>
        <div className="flex-1 h-px bg-gold"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 my-12 md:my-24">
        {brandIcons.map((icon) => (
          <SkillItem key={icon.name} name={icon.name} src={icon.src} />
        ))}
      </div>
    </section>
  );
}

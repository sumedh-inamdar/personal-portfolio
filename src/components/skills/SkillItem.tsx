import React from 'react';
interface SkillProps {
  name: string;
  src: string;
}
export default function SkillItem({ name, src }: SkillProps) {
  return (
    <div className="flex flex-col items-center space-y-4 transition-all hover:scale-110 hover:font-bold contrast-50 hover:contrast-100 animateFadeinUp opacity-0">
      <img src={src} className="max-h-[100px]" />
      <span className="text-base">{name}</span>
    </div>
  );
}

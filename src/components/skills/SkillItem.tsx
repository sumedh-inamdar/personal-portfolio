import React from 'react';
interface SkillProps {
  name: string;
  src: string;
}
export default function SkillItem({ name, src }: SkillProps) {
  return (
    <div className="flex flex-col items-center space-y-4 transition-all hover:bg-blue hover:text-shade0 font-light hover:font-bold animateFadeinUp opacity-0 border border-shade4 rounded-md p-4 shadow-lg">
      <img src={src} className="max-h-[100px]" />
      <span className="text-lg ">{name}</span>
    </div>
  );
}

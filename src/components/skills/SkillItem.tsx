import React from 'react';
interface SkillProps {
  name: string;
  src: string;
}
export default function SkillItem({ name, src }: SkillProps) {
  return (
    <div className="h-48 flex flex-col items-center transition-all hover:bg-blue hover:text-shade0 font-light hover:font-bold animateFadeinUp opacity-0 border border-shade4 rounded-md p-4 shadow-lg">
      <div className="flex-1 flex flex-col justify-center">
        <img src={src} className="max-h-[100px]" role="img" alt={name} />
      </div>
      <div className="text-lg">{name}</div>
    </div>
  );
}

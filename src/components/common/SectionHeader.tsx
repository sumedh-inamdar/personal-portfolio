import React from 'react';

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center w-7/12 animateFadeinUp opacity-0">
      <h2 className="text-3xl font-bold tracking-tighter mr-4">{title}</h2>
      <div className="flex-1 h-px bg-shade3"></div>
    </div>
  );
}

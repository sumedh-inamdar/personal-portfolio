import React from 'react';

export default function FeatureTech({ name }: { name: string }) {
  return (
    <div className="m-0.5 px-2 py-1 bg-navyBlue text-gold rounded-lg">{name}</div>
  );
}

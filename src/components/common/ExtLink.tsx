import React from 'react';

export default function ExtLink({
  url,
  title
}: {
  url: string;
  title: string;
}) {
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label="External Link">
      <span className="text-blue hover:underline">{title}</span>
    </a>
  );
}

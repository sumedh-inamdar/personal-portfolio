import React, { SyntheticEvent, useEffect } from 'react';
interface dataProps {
  data: {
    clip: string;
    class: string;
    name: string;
    description: string;
    tech: string;
  };
}
function playVideo(event: SyntheticEvent) {
  const target = event.target as HTMLVideoElement;
  target.play();
}
function pauseVideo(event: SyntheticEvent) {
  const target = event.target as HTMLVideoElement;
  target.pause();
}
export default function FeatureProj({ data }: dataProps) {
  useEffect(() => {
    // const clip = document.querySelector(`.${data.class}`);
    // clip?.addEventListener('mouseover', playVideo);
  });
  return (
    <li className="grid grid-cols-12 items-center">
      <video
        className={`col-span-8`}
        onPointerOver={playVideo}
        onPointerLeave={pauseVideo}
        muted={true}
        preload="auto"
        loop>
        <source src={data.clip} type="video/mp4" />
      </video>
      <div></div>
    </li>
  );
}

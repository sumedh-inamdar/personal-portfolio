import React, { SyntheticEvent } from 'react';
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
  return (
    <li className="grid grid-cols-12 grid-rows-6 items-center h-[400px]">
      <video
        className="z-0 row-start-1 row-end-7 col-start-1 col-span-8 contrast-50 hover:contrast-100 transition-all"
        onPointerOver={playVideo}
        onPointerLeave={pauseVideo}
        muted={true}
        loop>
        <source src={data.clip} type="video/mp4" />
      </video>
      <div className="flex flex-col z-10 row-start-2 row-span-4 col-start-7 col-end-13 h-full">
        <div className="text-2xl text-right">{data.name}</div>
        <div className="bg-white">{data.description}</div>
      </div>
    </li>
  );
}

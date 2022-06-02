import React, { SyntheticEvent } from 'react';
import FeatureTech from './FeatureTech';

interface dataProps {
  data: {
    clip: string;
    class: string;
    name: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
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
        className="z-0 row-start-6 md:row-start-1 row-span-6 col-start-2 md:col-start-1 col-span-8 contrast-50 hover:contrast-100 transition-all"
        onPointerOver={playVideo}
        onPointerLeave={pauseVideo}
        muted={true}
        loop>
        <source src={data.clip} type="video/mp4" />
      </video>
      <div className="flex flex-col z-10 row-start-1 md:row-start-2 row-span-4 col-start-1 md:col-start-5 col-end-13 h-full">
        <div className="text-2xl text-right font-extrabold tracking-wider">
          {data.name}
        </div>
        <div className="bg-yellow text-navyBlue text-base p-6">
          {data.description}
        </div>
        <div className="flex flex-wrap text-sm bg-gold text-navyBlue p-6 italic">
          {data.tech.map((tech) => (
            <FeatureTech key={tech} name={tech} />
          ))}
        </div>
        <div className="flex justify-end m-4 space-x-5">
          <a
            href={data.github}
            aria-label="External Link"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-110 hover:text-yellow transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href={data.link}
            aria-label="External Link"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-110 hover:text-yellow transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
}

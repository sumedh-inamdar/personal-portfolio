import React from 'react';
import FeatureTech from './FeatureTech';
import { useInView } from 'react-intersection-observer';

interface dataProps {
  data: {
    name: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    delay?: string;
  };
}
export default function RegularProj({ data }: dataProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });
  return (
    <div
      ref={ref}
      className="min-h-[300px] transition-all hover:-translate-y-3 bg-shade0 hover:bg-blue hover:text-shade0">
      {inView && (
        <div
          className={`${data.delay} animateFadeinUp opacity-0 h-full flex flex-col space-y-7 p-6 text-left shadow-xl border-2`}>
          <div className="flex justify-between flex-wrap">
            <a
              href={data.link}
              aria-label="External Link"
              rel="noreferrer"
              target="_blank">
              <h3 className="font-bold mr-2 mb-2">{data.name}</h3>
            </a>
            <div className="flex space-x-3 items-center mb-2">
              <a
                href={data.github}
                aria-label="External Link"
                rel="noreferrer"
                target="_blank"
                className="hover:scale-110 transition-all">
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
                className="hover:scale-110 transition-all">
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
          <p className="flex-1 text-base font-light">{data.description}</p>
          <div className="text-sm flex gap-1 flex-wrap text-shade8">
            {data.tech.map((tech) => (
              <FeatureTech key={tech} name={tech} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

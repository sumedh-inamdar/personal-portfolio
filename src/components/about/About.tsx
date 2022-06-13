import React from 'react';
import { about } from '../../constants';
import portrait from '../../assets/portrait.jpg';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });
  return (
    <section id="about">
      <div className="min-h-[400px]" ref={ref}>
        {inView && (
          <div>
            <SectionHeader title="About" />
            <div className=" flex flex-col md:flex-row items-center space-y-6 md:space-y-0 my-12 md:my-16">
              <div className="flex-2 space-y-6 text-lg leading-relaxed">
                <p className="animateFadeinUp delay100 opacity-0">{about.p1}</p>
                <p className="animateFadeinUp delay100 opacity-0">{about.p2}</p>
                <p className="animateFadeinUp delay100 opacity-0">{about.p3}</p>
              </div>
              <div className="flex-1 p-4 animateFadeinUp delay200 opacity-0">
                <img
                  src={portrait}
                  alt="sumedh's portrait"
                  className="opacity-75 hover:opacity-100 shadow-start shadow-shade5 rounded hover:shadow-finish hover:shadow-shade8 transition-all max-w-[300px] md:max-w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

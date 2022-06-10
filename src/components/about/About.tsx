import React from 'react';
import { about } from '../../constants';
import portrait from '../../assets/portrait.jpg';
import { useInView } from 'react-intersection-observer';

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
            <div className="flex items-center w-full mb-6 animateFadeinUp opacity-0">
              <h2 className="text-3xl font-bold tracking-tighter mr-4">
                About
              </h2>
              <div className="flex-1 h-px bg-gold"></div>
            </div>
            <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row my-12 md:my-16">
              <div className="flex-2 space-y-6">
                <p className="animateFadeinUp delay100 opacity-0">{about.p1}</p>
                <p className="animateFadeinUp delay100 opacity-0">{about.p2}</p>
                <p className="animateFadeinUp delay100 opacity-0">{about.p3}</p>
              </div>
              <div className="flex-1 p-4 animateFadeinUp delay200 opacity-0">
                <img
                  src={portrait}
                  alt="sumedh's portrait"
                  className="sepia hover:sepia-0 shadow-gold rounded hover:shadow-goldShort transition-all max-w-[300px] md:max-w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

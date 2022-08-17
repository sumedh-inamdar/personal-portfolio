import React from 'react';
import portrait from '../../assets/portrait.jpg';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';
import ExtLink from '../common/ExtLink';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });
  return (
    <section id="about" className="mb-12 md:mb-16">
      <div className="min-h-[400px]" ref={ref}>
        {inView && (
          <div>
            <SectionHeader title="About" />
            <div className=" flex flex-col md:flex-row items-center space-y-6 md:space-y-0 mt-12 md:mt-16">
              <div className="flex-2 space-y-6 text-lg font-light leading-relaxed tracking-tight">
                <p className="animateFadeinUp delay100 opacity-0">
                  Hello! My name is Sumedh Inamdar and I enjoy building things
                  for the web. I{`'`}m currently self-studying web development
                  through{' '}
                  <ExtLink
                    url="https://www.theodinproject.com"
                    title="the Odin Project"
                  />
                  .
                </p>
                <p className="animateFadeinUp delay100 opacity-0">
                  My prior experience includes managing the technical execution
                  of MagSafe and several other wireless charging technologies at
                  <ExtLink
                    url="https://www.apple.com"
                    title=" a large corporation"
                  />
                  , engineering NPI products at{' '}
                  <ExtLink
                    url="https://www.brocade.com"
                    title="a networking hardware company"
                  />
                  , as well as prototype development at{' '}
                  <ExtLink
                    url="https://www.crunchbase.com/organization/zyomyx-inc"
                    title="a medical device startup"
                  />
                  .
                </p>
                <p className="animateFadeinUp delay100 opacity-0">
                  I most enjoy building meaningful products through solving
                  challenging technical problems in a collaborative environment.
                </p>
              </div>
              <div className="flex-1 p-4 animateFadeinUp delay200 opacity-0">
                <img
                  src={portrait}
                  alt="sumedh's portrait"
                  className="opacity-75 hover:opacity-100 shadow-start shadow-shade8 rounded hover:shadow-finish hover:shadow-blue transition-all max-w-[300px] md:max-w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

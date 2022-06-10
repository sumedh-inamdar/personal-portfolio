import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="block max-w-6xl mx-auto px-6 md:px-24">
      <section className="min-h-screen flex flex-col justify-center space-y-7">
        <h1 className="text-5xl md:text-6xl tracking-tighter animateFadeinUp delay1000 opacity-0">
          <b>Sumedh</b> Inamdar
        </h1>
        <h2 className="text-2xl flex items-center animateFadeinUp delay1200 opacity-0">
          <div>{`> `}</div>
          <ul className="ml-2 h-8 overflow-hidden typewriter typeEffect">
            <li className="relative top-0 animateSlide">
              <span>front-end developer</span>
            </li>
            <li className="relative top-0 animateSlide">
              <span>software engineer</span>
            </li>
            <li className="relative top-0 animateSlide">
              <span>tennis player</span>
            </li>
          </ul>
        </h2>
      </section>
      {children}
    </main>
  );
}

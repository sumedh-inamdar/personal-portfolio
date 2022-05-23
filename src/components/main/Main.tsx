import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="block max-w-6xl mx-auto px-24 bg-blue-100">
      <section className="min-h-screen flex flex-col bg-slate-100 justify-center space-y-7">
        <h1 className="text-6xl tracking-tighter">
          <b>Sumedh</b> Inamdar
        </h1>
        <h2 className="text-2xl flex items-center">
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

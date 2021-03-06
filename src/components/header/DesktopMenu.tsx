import React from 'react';
import { navConfig } from '../../constants';

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6 ">
        {navConfig.map((navItem) => (
          <a
            key={navItem.name}
            href={navItem.url}
            className={`font-light text-lg tracking-wide opacity-0 animateFadeinDown ${navItem.delay} hover:text-blue`}>
            <li>{navItem.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

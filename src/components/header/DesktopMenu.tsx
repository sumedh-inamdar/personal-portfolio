import React from 'react';
import { navConfig } from '../../constants';

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6 text-base">
        {navConfig.map((navItem) => (
          <a key={navItem.name} href={navItem.url}>
            <li>{navItem.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

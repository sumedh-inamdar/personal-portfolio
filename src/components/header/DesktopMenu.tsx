import React from 'react';
import { navConfig } from '../../constants';

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6">
        {navConfig.map((navItem) => (
          <li key={navItem.name}>{navItem.name}</li>
        ))}
      </ul>
    </nav>
  );
}

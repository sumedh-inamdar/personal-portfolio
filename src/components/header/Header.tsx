import React from 'react';
import DesktopMenu from './DesktopMenu';

import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="h-16 bg-slate-200 flex justify-between px-10 items-center">
      <div>LOGO</div>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

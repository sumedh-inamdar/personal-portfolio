import React from 'react';
import DesktopMenu from './DesktopMenu';

import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 h-16 flex justify-between px-10 items-center">
      <div>LOGO</div>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

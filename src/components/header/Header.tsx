import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

let lastScroll = 0;
const hysteresis = 50;

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const currentScroll = window.scrollY;

  if (
    currentScroll > lastScroll &&
    !header?.classList.contains('-translate-y-full')
  ) {
    if (currentScroll - lastScroll > hysteresis)
      header?.classList.add('-translate-y-full');
    else return;
  } else if (
    currentScroll < lastScroll &&
    header?.classList.contains('-translate-y-full')
  )
    header?.classList.remove('-translate-y-full');

  lastScroll = currentScroll;
});

export default function Header() {
  return (
    <header className="transition-all duration-300 ease-in z-50 bg-darkBlue shadow-2xl fixed inset-x-0 top-0 h-16 flex justify-between px-10 items-center">
      <div>LOGO</div>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

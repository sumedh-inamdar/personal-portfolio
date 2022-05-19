import React from 'react';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="h-16 bg-slate-200 flex justify-between px-10 items-center">
      <div>LOGO</div>
      <Menu />
    </header>
  );
}

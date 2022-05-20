import React from 'react';
interface ButtonProps {
  setViewModal: (viewModal: boolean) => void;
}
export default function HamburgerButton({ setViewModal }: ButtonProps) {
  function openModal() {
    setViewModal(true);
  }

  return (
    <button
      className="outline-none mobile-menu-button"
      aria-label="Hamburger"
      onClick={openModal}>
      <svg
        className="w-8 h-8"
        x-show="!showMenu"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  );
}

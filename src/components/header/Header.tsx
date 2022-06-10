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
      <div className="opacity-0 animateFadeinDown">
        <a href="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 50 50"
            fill="currentColor"
            stroke="currentColor">
            <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 25 6.5 C 14.799 6.5 6.5 14.799 6.5 25 C 6.5 35.201 14.799 43.5 25 43.5 C 35.201 43.5 43.5 35.201 43.5 25 C 43.5 14.799 35.201 6.5 25 6.5 z M 24.757812 11.998047 C 30.071813 11.998047 33.514203 14.994953 34.283203 20.251953 L 30.080078 20.789062 C 30.080078 17.378062 28.162859 15.841797 24.755859 15.841797 C 21.970859 15.841797 18.994141 16.444969 18.994141 19.042969 C 18.994141 20.937969 20.6335 21.807875 26.3125 22.921875 C 30.3585 23.715875 35 25.297406 35 30.566406 C 35 34.158406 31.087719 38 25.261719 38 C 19.230719 38 15.569625 34.913828 14.640625 29.048828 L 18.892578 28.302734 C 18.892578 32.399734 21.118719 34.158203 25.261719 34.158203 C 28.808719 34.158203 31.174203 32.557406 31.158203 30.566406 C 31.143203 28.657406 30.003172 27.637547 25.576172 26.685547 C 20.946172 25.689547 15.152344 24.644969 15.152344 19.042969 C 15.152344 14.471969 20.102813 11.998047 24.757812 11.998047 z"></path>
          </svg>
        </a>
      </div>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

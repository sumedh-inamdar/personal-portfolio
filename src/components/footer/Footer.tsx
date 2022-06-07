import React from 'react';

export default function Footer() {
  return (
    <section>
      <div className="text-center text-sm py-2">
        <a
          className="hover:text-yellow transition-all"
          aria-label="External Link"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/sumedh-inamdar/personal-portfolio">
          <div>{`Designed & Built by Sumedh Inamdar`}</div>
        </a>
      </div>
    </section>
  );
}

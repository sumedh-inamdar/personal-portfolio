import React from 'react';
import octoIcon from '../../assets/brandIcons/Octicons-mark-github.svg';

export default function Contact() {
  return (
    <section>
      <div className="flex items-center w-full mb-6">
        <h2 className="text-3xl font-bold tracking-tighter mr-4">Contact</h2>
        <div className="flex-1 h-px bg-gold"></div>
      </div>
      <div className="flex flex-col md:flex-row my-12">
        <div className="flex-1 flex flex-col space-y-12 text-left px-6">
          <div>{`I'm currently open to opportunities as a front-end developer. Please
        drop me a message if you'd like to chat!`}</div>
          <div className="flex justify-around">
            <a
              className="hover:scale-110 hover:text-yellow transition-all"
              aria-label="External Link"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/sumedhi/">
              <svg height="60" viewBox="0 0 128 128">
                <path
                  fill="currentColor"
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path>
                <path d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
              </svg>
            </a>
            <a
              className="hover:scale-110 hover:text-yellow transition-all"
              aria-label="External Link"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/sumedh-inamdar">
              <svg
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
        <form
          className="flex-1 flex flex-col space-y-6 px-6"
          action=""
          method="post">
          <input
            type="text"
            placeholder="Bob Sacamano"
            name="fullName"
            required
          />
          <input
            type="email"
            name="userEmail"
            placeholder="bobs@kramerica.com"
            required
          />
          <textarea
            rows={5}
            cols={20}
            name="userMessage"
            placeholder={`Hey! I'd love to connect...`}></textarea>
          <button className="btn-primary w-fit m-auto" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

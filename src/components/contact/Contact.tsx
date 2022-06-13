import React, { SyntheticEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../App';
import SubmitModal from './SubmitModal';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';

export default function Contact() {
  const [viewModal, setViewModal] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });

  async function formSubmit(event: SyntheticEvent) {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'contactSubmissions'), {
        name: (document.querySelector('#fullName') as HTMLInputElement).value,
        email: (document.querySelector('#userEmail') as HTMLInputElement).value,
        message: (document.querySelector('#userMessage') as HTMLTextAreaElement)
          .value,
        timestamp: new Date().toString()
      });
      console.log('Document written with ID:', docRef.id);
      setViewModal(true);
      (document.querySelector('#contactForm') as HTMLFormElement).reset();
    } catch (error) {
      console.log('Error sending form:', error);
      alert('Submission failed');
    }
  }

  return (
    <section id="contact">
      {viewModal && <SubmitModal setViewModal={setViewModal} />}

      <div ref={ref} className="min-h-[400px]">
        {inView && (
          <div>
            <SectionHeader title="Contact" />
            <div className="flex flex-col md:flex-row my-12 space-y-12 md:space-y-0">
              <div className="opacity-0 animateFadeinUp delay100 flex-1 flex flex-col space-y-12 text-left px-6">
                <div>{`I'm currently open to opportunities as a front-end developer. Please
        drop me a message if you'd like to chat!`}</div>
                <div className="flex justify-around">
                  <a
                    className="hover:scale-110 text-shade0 rounded-lg hover:border-blue hover:border-2 transition-all"
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
                    className="hover:scale-110 hover:text-blue transition-all"
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
                  <a
                    className="hover:scale-110 hover:text-blue transition-all"
                    aria-label="External Link"
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:sinamdar@gmail.com">
                    <svg
                      height="60"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 75.294 75.294"
                      xmlSpace="preserve">
                      <path
                        d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <form
                id="contactForm"
                className="animateFadeinUp opacity-0 delay200 flex-1 flex flex-col space-y-4 px-6"
                onSubmit={formSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="fullName">Your Name</label>
                  <input
                    className="focus:pl-4 transition-all bg-shade1 hover:bg-shade2 focus:bg-shade2"
                    id="fullName"
                    type="text"
                    placeholder="Bob Sacamano"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="userEmail">Email Address</label>
                  <input
                    className="focus:pl-4 transition-all bg-shade1 hover:bg-shade2 focus:bg-shade2"
                    type="email"
                    id="userEmail"
                    placeholder="bobs@kramerica.com"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="userMessage">Message</label>
                  <textarea
                    id="userMessage"
                    className="focus:pl-4 transition-all bg-shade1 hover:bg-shade2 focus:bg-shade2"
                    rows={5}
                    cols={20}
                    placeholder={`Hey! I'd love to connect...`}></textarea>
                </div>
                <button className="btn-primary w-fit m-auto" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

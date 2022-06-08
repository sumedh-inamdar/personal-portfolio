import React, { SyntheticEvent } from 'react';
import celebration from '../../assets/brandIcons/celebration.png';

export default function SubmitModal({
  setViewModal
}: {
  setViewModal: (viewModal: boolean) => void;
}) {
  function modalHandler(event: SyntheticEvent) {
    if (!(event.target as HTMLElement).closest('#modal')) setViewModal(false);
  }
  return (
    <div>
      <div
        className="z-40 flex justify-center items-center fixed inset-0 bg-midnightBlue bg-opacity-50  h-full w-full"
        id="modalWrap"
        onClick={modalHandler}>
        <div
          className="z-50 w-3/4 md:w-1/2 bg-gold text-darkBlue text-center flex flex-col justify-center items-center space-y-4 rounded p-4"
          id="modal">
          <img className="mt-2 w-[128px]" src={celebration} alt="Celebration" />
          <div className="text-lg">Thank you for your message!</div>
          <div className="text-sm">
            I will get back in touch in 24-48 hours.
          </div>
          <button
            className="btn-primary w-fit hover:bg-darkBlue hover:text-gold transition-all"
            onClick={() => setViewModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

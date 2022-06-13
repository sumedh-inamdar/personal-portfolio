import React from 'react';
import { navConfig } from '../../constants';
interface ModalProps {
  setViewModal: (viewModal: boolean) => void;
}
export default function MobileMenuModal({ setViewModal }: ModalProps) {
  function closeModal() {
    setViewModal(false);
  }

  return (
    <nav>
      <div
        className="fixed inset-0 bg-shade0 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
        onClick={closeModal}
      />
      <div className="fixed inset-y-0 right-0 max-w-[75vw] w-96 shadow-lg bg-shade0 py-6 px-4">
        <div
          onClick={closeModal}
          className="text-right px-6 cursor-pointer text-2xl hover:text-slate-600">
          X
        </div>
        <ul className="flex flex-col text-center h-full justify-center space-y-8">
          {navConfig.map((navItem) => (
            <a onClick={closeModal} key={navItem.name} href={navItem.url}>
              <li>{navItem.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}

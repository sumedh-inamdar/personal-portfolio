import React, { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import MobileMenuModal from './MobileMenuModal';

export default function MobileMenu() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <HamburgerButton setViewModal={setViewModal} />
      {viewModal && <MobileMenuModal setViewModal={setViewModal} />}
    </div>
  );
}

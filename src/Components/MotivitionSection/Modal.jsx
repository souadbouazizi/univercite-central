// Modal.jsx
import React from 'react';

const Modal = ({ closeModal, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-4 max-w-2xl w-full relative"> {/* Augmentez la largeur ici */}
        <button 
          onClick={closeModal}
          className="absolute top-2 right-2 py-1 px-3 text-2xl font-bold bg-red-600 hover:bg-red-300 text-gray-100 hover:text-red-600 transition rounded-full z-10"
        >
          &times; {/* Symbole de fermeture */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

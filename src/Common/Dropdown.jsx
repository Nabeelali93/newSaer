import React, { useEffect, useRef, useState } from 'react'

function Dropdown({ isOpen, closeModal }) {

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (
            isOpen &&
            modalRef.current &&
            !modalRef.current.contains(event.target)
          ) {
            closeModal();
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, [isOpen, closeModal]);
    
      const modalRef = useRef();
    
      if (!isOpen) return null;

    
  return (
<div className="fixed inset-0 bg-black-500 bg-opacity-50 z-50 flex justify-end p-4">
      <div
        ref={modalRef}
        className="bg-white w-full sm:w-96 p-6 rounded-lg shadow-lg"
      >
        <button onClick={closeModal} className="float-right">
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        {/* Render your notifications here */}
        <div className="flex items-center space-x-3 mb-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt="avatar"
          />
          <div>
            <p className="text-sm font-medium">
              Your booking has been confirmed
            </p>
            <p className="text-xs">Checkout available slot</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
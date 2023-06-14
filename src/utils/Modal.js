import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, open, setOpen }) => {
  const handleOverlayClick = (e) => {
    // Close the modal when clicking outside the modal content
    if (e.target === e.currentTarget) {
      setOpen(!open);
    }
  };

  // If the modal is not open, return null (do not render anything)
  if (!open) return null;

  return ReactDOM.createPortal(
    <Fragment>
      <div
        onClick={handleOverlayClick}
        className="z-50 fixed w-screen h-screen bg-[#0000003f] flex items-center justify-center"
      >
        <div>{children}</div>
      </div>
    </Fragment>,
    document.getElementById("portal") // Render the modal content inside the "portal" element in the DOM
  );
};

export default Modal;

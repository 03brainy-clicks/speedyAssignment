import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, open, setOpen }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(!open);
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <Fragment>
      <div
        onClick={handleOverlayClick}
        className="z-50 fixed w-screen h-screen bg-[#7d95f73f] flex items-center justify-center"
      >
        <div>{children}</div> 
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default Modal;

import React, { useEffect } from "react";

import "./Modal.css";

const Modal = ({ setIsOpen, isOpen }) => {
  // Prevent scrolling when modal is active.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="modal-dark-background" onClick={() => setIsOpen(false)} />
      <div className="modal-container ">
        <div className="modal-inner-container">
          <div className="modal-header">
            <h1 className="modal-heading">Heading</h1>
          </div>
          <button className="modal-cross-btn" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="modal-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            similique quod animi velit unde quo possimus? Atque, reprehenderit,
            aperiam corrupti enim provident ipsam quod animi eveniet itaque
            voluptates iure aliquid?
          </div>
          <div className="modal-actions-container">
            <div className="modal-actions">
              <button
                className="modal-close-btn"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

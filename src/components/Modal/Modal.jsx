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
      <div className="modal-container">
        <div className="modal-inner-wrapper">
          <header className="modal-header">
            <h1 className="-modal-heading">Heading</h1>
          </header>
          <button
            className="modal-cross-button"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <div className="modal-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            facilis totam adipisci autem quasi exercitationem recusandae amet
            obcaecati, assumenda inventore eius labore molestiae ipsam
            voluptatum nisi soluta similique minus sapiente blanditiis! Cum,
            quas vero iste quidem dolor odit quisquam consequuntur,
            reprehenderit nulla provident magni! Illo voluptatibus asperiores ea
            impedit eum.
          </div>
          <div className="modal-action-container">
            <div className="modal-inner-wrapper">
              <button
                className="modal-close-button"
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

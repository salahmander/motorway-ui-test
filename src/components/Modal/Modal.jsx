import React, { useEffect } from "react";

import "./Modal.css";

const Modal = ({ setIsOpen, isOpen, imageData }) => {
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
          <header
            className="modal-header"
            style={{ backgroundColor: `${imageData?.color}` }}
          >
            <div className="modal-header-image-wrapper">
              <img
                className="modal-header-image"
                src={`${imageData?.url}.jpg`}
                alt={imageData?.alt_description}
              />
            </div>
            <div className="modal-profile-image-wrapper">
              <img
                className="modal-profile-image"
                src={`${imageData?.user?.profile_image}.jpg`}
                alt="profile image"
              />
            </div>
          </header>
          <div className="modal-content">
            <div className="modal-content-top">
              <h1>{imageData?.user?.username}</h1>
              <h2>{imageData?.user?.name}</h2>
              <h3>{imageData?.user?.location}</h3>
            </div>
            <div className="modal-content-middle">
              <p>{imageData?.user?.bio}</p>
            </div>
            <div className="modal-content-bottom">
              <div className="total-likes total">
                <h1>Total Likes</h1>
                <span>{imageData?.user?.total_likes}</span>
              </div>
              <div className="total-collections total">
                <h1>Total Collections</h1>
                <span>{imageData?.user?.total_collections}</span>
              </div>
              <div className="total-photos total">
                <h1>Total Photos</h1>
                <span>{imageData?.user?.total_photos}</span>
              </div>
            </div>
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

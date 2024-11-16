import React from "react";
import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <div>
      <ReactModal
        isOpen={!!image}
        onRequestClose={onClose}
        className={s.modal}
        overlayClassName={s.overlay}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <button onClick={onClose} className={s.closeButton}>
          Close
        </button>

        {image && (
          <>
            <img src={image.urls.regular} alt={image.alt_description} />
          </>
        )}
      </ReactModal>
    </div>
  );
};

export default ImageModal;

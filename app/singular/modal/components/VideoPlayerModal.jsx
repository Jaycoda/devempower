"use client";
import { useState } from "react";
import Modal from "@/components/modal/Modal";

const VideoPlayerModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg"
        onClick={openModalHandler}
      >
        Show Video Player Modal
      </button>

      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Video PlayerModal"
      >
        <div className="my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GzsAp-bSqZ4?si=S_9FCxqYN79pN9NO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayerModal;

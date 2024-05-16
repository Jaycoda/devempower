"use client";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import Image from "next/image";

const ShowImageModal = () => {
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
        Show Image Modal
      </button>

      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Show Image Modal"
      >
        <div className="my-4">
          <Image
            src="/assets/images/sky.jpg"
            width={600}
            height={300}
            className="rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ShowImageModal;

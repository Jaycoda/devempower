"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/modal/Modal";

const TimerCountdownModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [timerId, setTimerId] = useState("");

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      let newTimerID = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      setTimerId(newTimerID);
    } else {
      if (timerId) {
        clearTimeout(timerId);
        setTimerId("");
      }
    }

    // cleanup function for unmounting phase
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [showModal]);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg"
        onClick={openModalHandler}
      >
        Timer Countdown Modal
      </button>
      <h1 className="text-xl text-blue-800">timer Id: {timerId}</h1>

      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Timer Countown Modal"
      >
        <div className="my-4">
          <h1 className="text-xl">This modal will close in 3 seconds.</h1>
          <h2 className="text-xl">It is just for your information</h2>
        </div>
      </Modal>
    </div>
  );
};

export default TimerCountdownModal;

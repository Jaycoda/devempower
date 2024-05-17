"use client";

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, title = "My Modal", onDismiss, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className=" fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center "
      onClick={onDismiss}
    >
      <div
        className="min-w-[400px] max-w-full overflow-x-hidden min-h-[200px] bg-yellow-100 rounded-xl p-2 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-4 top-3 text-2xl text-red-600 cursor-pointer"
          onClick={onDismiss}
        />

        <div className="w-full h-10 flex items-center mb-1 border border-b-gray-300">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

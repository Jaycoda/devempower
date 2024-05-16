import React from "react";
import SimpleHelloWorldModal from "./components/SimpleHelloWorldModal";
import ShowImageModal from "./components/ShowImageModal";
import VideoPlayerModal from "./components/VideoPlayerModal";
import ShowChartModal from "./components/ShowChartModal";
import MoneyTrackingModal from "./components/MoneyTrackingModal";
import ConfirmationModel from "./components/ConfirmationModel";
import InputFormModal from "./components/InputFormModal";
import TimerCountdownModal from "./components/TimerCountdownModal";

const ModalPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>This is Modal page</h1>
      <br />
      <SimpleHelloWorldModal />
      <br />
      <ShowImageModal />
      <br />
      <VideoPlayerModal />
      <br />
      <ShowChartModal />
      <br />
      <MoneyTrackingModal />
      <br />
      <ConfirmationModel />
      <br />
      <InputFormModal />
      <br />
      <TimerCountdownModal />
    </div>
  );
};

export default ModalPage;

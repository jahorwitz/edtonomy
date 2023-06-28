import { useState } from "react";
import closeButton from "../../images/close-button.svg";

export default function ModalWithVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openPopup() {
    setIsModalOpen(true);
  }

  function closePopup() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        data-testid="video-modal"
        className={`${
          isModalOpen
            ? "hidden"
            : "flex justify-center items-center w-screen h-screen"
        }`}
      >
        <button
          onClick={openPopup}
          className="border-[1px] bg-white w-[100px] h-[100px] "
        >
          Watch Video
        </button>
      </div>
      <div
        className={`${
          isModalOpen
            ? "absolute w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-1"
            : "hidden"
        }`}
      >
        <div className="relative">
          <button
            className="absolute top-[-20px] right-[-18.5px]"
            onClick={closePopup}
            data-testid="close-button"
          >
            <img src={closeButton} className="w-[13.5px] h-[13.5px]"></img>
          </button>
          <iframe
            className="bg-black rounded-[10px]"
            width="900"
            height="500"
            src="https://www.youtube.com/embed/vpvQfCLWOn8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}

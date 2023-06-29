import cx from "classnames";
import { useState } from "react";
import closeButton from "../../images/close-button.svg";
import OpenModalButton from "./OpenModalButton";

export default function ModalWithVideo({ className, ...rest }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openPopup() {
    setIsModalOpen(true);
  }

  function closePopup() {
    setIsModalOpen(false);
  }

  return (
    <>
      {!isModalOpen && (
        <OpenModalButton
          openPopup={openPopup}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div
        className={cx(
          `${
            isModalOpen
              ? "absolute w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-1"
              : "hidden"
          }`,
          className
        )}
      >
        <div className="relative">
          <button
            className="absolute top-[-20px] right-[-18.5px]"
            onClick={closePopup}
          >
            <img
              src={closeButton}
              className="w-[13.5px] h-[13.5px]"
              alt="close-button"
            ></img>
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

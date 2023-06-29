import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import closeButton from "../../images/close-button.svg";
import OpenModalButton from "./OpenModalButton";

export default function ModalWithVideo({ className, ...rest }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const youtubePlayerRef = useRef(null);

  function openPopup() {
    setIsModalOpen(true);
  }

  function closePopup() {
    setIsModalOpen(false);
  }

  function closeByEsc(e) {
    if (isModalOpen && e.key === "Escape") {
      setIsModalOpen(false);
    }
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-opened")) {
      setIsModalOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", closeByEsc);
    window.addEventListener("click", handleOverlayClick);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
      window.removeEventListener("click", handleOverlayClick);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen && youtubePlayerRef.current) {
      const player = youtubePlayerRef.current;
      player.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo" }),
        "*"
      );
    }
  }, [isModalOpen]);

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
        title="video-modal"
        onClick={handleOverlayClick}
        onKeyDown={closeByEsc}
        className={cx(
          `${
            isModalOpen
              ? "modal-opened absolute w-screen h-screen flex items-center justify-center bg-black bg-opacity-65 z-1"
              : "hidden"
          }`,
          className
        )}
      >
        <div className="relative" title="video-player">
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
            src={`${
              isModalOpen ? "https://www.youtube.com/embed/vpvQfCLWOn8" : ""
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
}

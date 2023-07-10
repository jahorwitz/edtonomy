import cx from "classnames";
import { useEffect } from "react";
import closeButton from "../../images/close-button.svg";

export const ModalWithVideo = ({ className, onClose, src, ...rest }) => {
  function closePopup() {
    onClose();
  }

  function closeByEsc(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-opened")) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", closeByEsc);
    window.addEventListener("click", handleOverlayClick);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
      window.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <>
      <div
        title="video-modal"
        onClick={handleOverlayClick}
        onKeyDown={closeByEsc}
        className={cx(
          "modal-opened absolute top-0 w-screen h-screen flex items-center justify-center bg-gray-950/[.5] z-20",
          className
        )}
        {...rest}
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
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
};

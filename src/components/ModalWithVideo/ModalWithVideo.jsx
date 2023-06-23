import { useEffect, useRef, useState } from "react";
import closeButton from "../../images/close-button.svg";

export default function ModalWithVideo() {
  //this functions' arguments (isModalOpen, closePopup) must be tailored to project
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  function openPopup() {
    setIsModalOpen(true);
  }

  function closePopup() {
    setIsModalOpen(false);
  }

  // function togglePlay() {
  //   setIsPlaying((isPlaying) => !isPlaying);
  //   setIsShown((isShown) => !isShown);

  //   if (isPlaying) {
  //     playerRef.current.pause();
  //   } else {
  //     playerRef.current.play();
  //   }
  // }

  // function toggleMute() {
  //   setIsMuted((isMuted) => !isMuted);
  // }

  useEffect(() => {
    setIsMuted(false);
  }, []);

  /* --------------------------------- Styles --------------------------------- */
  const player = {
    borderRadius: "50%",
  };

  return (
    <>
      <div
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
        <div className={`relative`}>
          <button
            className="absolute top-[-20px] right-[-18.5px]"
            onClick={closePopup}
          >
            <img src={closeButton} className="w-[13.5px] h-[13.5px]"></img>
          </button>
          <iframe
            className="bg-black rounded-[5px]"
            width="900"
            height="500"
            src="https://www.youtube.com/embed/vpvQfCLWOn8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            playerRef
          ></iframe>
          {/* <ReactPlayer
            className="rounded-[5px]"
            width={900}
            height={500}
            url="https://www.youtube.com/watch?v=vpvQfCLWOn8"
            playing={isPlaying}
            controls
            light={false}
            style={player}
          /> */}
          {/* <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <img
              className={`w-[41px] h-[51px] ${isPlaying ? "hidden" : ""}`}
              src={playButton}
            ></img>
          </button> */}
          {/* <button
          className="relative bottom-5 left-20"
          onClick={toggleMute}
        ></button> */}
        </div>
      </div>
    </>
  );
}

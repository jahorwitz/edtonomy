export default function OpenModalButton({ openPopup }) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <button
        onClick={openPopup}
        className="border-[1px] bg-white w-[100px] h-[100px]"
      >
        Watch Video
      </button>
    </div>
  );
}

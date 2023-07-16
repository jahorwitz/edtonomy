import chatIcon from "../../images/chat-left-text.svg";
import chevron from "../../images/chevron-left.svg";
import bubble from "../../images/pixel-speech-bubble.png";

// The component ChatContainer is a container for a chat service
// Takes children to pass any content,onChatNow and OnConversations are functions that can be modified for convinience,and isChatActive to control the state to verify if there is any conversation active
export const ChatContainer = ({ onBack, onClick }) => {
  return (
    <>
      <div className="w-[371px] h-[583px] mr-[auto] ml-[auto] bg-[#ED6647] rounded-[12px] flex flex-col font-['Inter']">
        <div className="bg-[#FFFFFF] h-[100%] rounded-[12px] ">
          <div className="flex flex-col items-center h-[300px] ">
            <h2 className="mt-[40px] mb-[40px] font-bold text-lg">
              This is embedded interface
            </h2>
            <img className="w-[200px] mb-[40px] opacity-[0.3]" src={bubble} />
            <p className="opacity-[0.3]">No ongoing conversation</p>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              className="bg-[#ED6647] flex flex-row items-center rounded-[5px] w-[125px] h-[35px] justify-center text-white"
              onClick={onBack}
            >
              <img className="mr-[10px]" src={chevron} />
              Go back
            </button>
            <button
              className="bg-[#ED6647] flex flex-row items-center rounded-[5px] w-[125px] h-[35px] justify-center text-white"
              onClick={onClick}
            >
              <img className="mr-[10px]" src={chatIcon} />
              Chat now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

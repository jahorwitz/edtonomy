const ChatContainer = ({
  children,
  onChatNow,
  onConversations,
  isChatActive,
}) => {
  return (
    <>
      <div className="w-[371px] h-[583px] mr-[auto] ml-[auto] bg-[#ED6647] rounded-[12px] flex flex-col font-['Inter']">
        <button
          className="flex flex-row text-white items-center ml-[45px] mr-[45px] mt-[35px] mb-[35px] w-[300px] text-2xl"
          onClick={onConversations}
        >
          <div className="flex flex-row relative mr-6  bg-[#CC5B40] w-[50px] h-[50px] rounded-[40px]">
            <img
              className="w-[20px] h-[20px] mt-3 ml-3"
              src="/src/images/chat-left-text.svg"
            />
            <img
              className="absolute left-4 top-5 w-[20px] h-[20px]"
              src="/src/images/chat-right.svg"
            />
          </div>
          Conversations
        </button>
        <div className="bg-[#FFFFFF] h-[100%] rounded-[12px] ">
          {isChatActive ? <div>{children}</div> : <div className="flex flex-col items-center h-[300px] "><h2 className="mt-[40px] mb-[40px] font-bold text-lg">This is embedded interface</h2><img className="w-[200px] mb-[40px] opacity-[0.3]" src="/src/images/pixel-speech-bubble.png"/><p className="opacity-[0.3]">No ongoing conversation</p></div>}

          <button
            className="bg-[#ED6647] flex flex-row items-center ml-[auto] mr-[auto] rounded-[5px] w-[125px] h-[35px] justify-center text-white"
            onClick={onChatNow}
          >
            <img className="mr-[10px]" src="/src/images/chat-left-text.svg" />
            Chat now
          </button>
        </div>
      </div>
    </>
  );
};
export default ChatContainer;

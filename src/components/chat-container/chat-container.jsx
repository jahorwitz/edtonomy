
const ChatContainer = ({children, onChatNow, onConversations}) => {
  return (
    <>
      <div className="w-[371px] h-[583px] mr-[auto] ml-[auto] bg-[#ED6647] rounded-[12px] flex flex-col">
        <button className="flex flex-row text-white ml-[25px] mr-[45px] mt-[35px] mb-[35px]" onClick={onConversations}>
          <div className="flex flex-row relative mr-6">
            <img src="/src/images/chat-left-text.svg" />
            <img className="absolute left-2 top-2" src="/src/images/chat-right.svg" />
          </div>
          Conversations
        </button>
        <div>
          <div>{children}</div>
          <button onClick={onChatNow}>
            <img src="/src/images/chat-left-text.svg" />
            Chat now
          </button>
        </div> 
      </div>
    </>
  );
};
export default ChatContainer;

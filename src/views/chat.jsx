import { ChatContainer } from "../components";

export const Chat = ({ goToNamedStep }) => (
  <>
    <ChatContainer onBack={() => goToNamedStep("welcome")} />
  </>
);

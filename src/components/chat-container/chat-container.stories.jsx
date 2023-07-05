import ChatContainer from "./chat-container"; 
export default {
  component: ChatContainer,
  title: "chat container",
};
const Template = (args) => {
  return <ChatContainer {...args}/>;
};
export const Default = Template.bind({});
Default.args = {
  children: [
    
  ],
};

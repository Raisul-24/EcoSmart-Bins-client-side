// MessageParser functional component

const MessageParser = ({ actionProvider, state }) => {
  const parse = (message) => {
    console.log(message);
  };

  return null; // You might want to return something meaningful here
};


// ActionProvider functional component

const ActionProvider = ({
  createChatBotMessage,
  setStateFunc,
  createClientMessage,
  stateRef,
  createCustomMessage,
  ...rest
}) => {
  // Your component logic here

  return null; // You might want to return something meaningful here
};


// Config functional component
import { createChatBotMessage } from 'react-chatbot-kit';

const Config = {
  initialMessages: [createChatBotMessage('Hello world')],
};

export {Config,MessageParser,ActionProvider};

import "./styles.css";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatKit = () => {
  const [showBot, toggleBot] = useState(false);

  return (
    <div className="app-chatbot-container w-96 h-[500px] bg-green-400">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatKit;

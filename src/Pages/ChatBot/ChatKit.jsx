import "./styles.css";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatKit = () => {
  return (
    <div className="my-10 flex justify-center fixed right-10 bottom-14 z-30 shadow-xl border-4 border-brand-color rounded-3xl max-w-96 h-[500px] bg-white">
      <Chatbot
        headerText="EcoSmartBin ChatBot"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatKit;

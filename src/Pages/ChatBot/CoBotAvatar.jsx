import BotAvatar from "../../assets/images/icon2.png";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={BotAvatar} className="w-10" />
      </div>
    </div>
  );
};

export default CoBotAvatar;

import { createChatBotMessage } from "react-chatbot-kit";
import GlobalStatistics from "./widgets/globalStatistics";
import LocalStatistics from "./widgets/LocalStatistcs";
import Contact from "./widgets/Contant";
import CoBotAvatar from "./CoBotAvatar";
import Overview from "./widgets/Overview";

const config = {
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#3a9e1e",
    },
    chatButton: {
      backgroundColor: "#3a9e1e",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hi, I'm here to provide you guide for waste service`),
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: () => <GlobalStatistics />,
    },
    {
      widgetName: "localStatistics",
      widgetFunc: () => <LocalStatistics />,
    },
    {
      widgetName: "emergencyContact",
      widgetFunc: () => <Contact />,
    },
  ],
};

export default config;

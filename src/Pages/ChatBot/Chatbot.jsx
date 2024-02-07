import ChatBot, { Loading } from "react-simple-chatbot";

const Chatbot = () => {
  if (Loading) {
    return;
  }

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our EcoSmart-Bin",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your desired option.",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React",
        },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: "React",
      message:
        "Thanks for letting us know about your React issue. Our team will resolve it ASAP",
      end: false,
    },
    {
      id: "Angular",
      message:
        "Thanks for letting us know about your Angular issue. Our team will resolve it ASAP",
      end: false,
    },
  ];

  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
};

export default Chatbot;

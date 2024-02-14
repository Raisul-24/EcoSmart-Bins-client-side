class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToState(message);
  };

  handleGlobalStats = () => {
    const message = this.createChatBotMessage(
      "Below are some possible service.",
      {
        widget: "globalStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleLocalStats = () => {
    const message = this.createChatBotMessage(
      "you can Request any service on PickUp Request page",
      {
        widget: "localStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage("contact with us", {
      widget: "emergencyContact",
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    this.addMessageToState(message);
  };

  handleMedicine = () => {
    const message = this.createChatBotMessage(
      "EcoSmartBin is a smart waste management system.",
      {
        widget: "medicineDelivery",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleJoke = () => {
    var jokes = [
      "So many coronavirus jokes out there, it’s a pundemic!",
      "I’ll tell you a coronavirus joke now, but you’ll have to wait two weeks to see if you got it!",
      "Did you hear the joke about coronavirus? Never mind, I don’t want to spread it around!",
      "What should you do if you don’t understand a coronavirus joke? Be patient!",
      "Why do they call it the novel coronavirus? It’s a long story...",
      "Since we’re all in quarantine I guess we’ll be making only inside jokes from now on!",
    ];

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const message = this.createChatBotMessage(randomJoke);

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;

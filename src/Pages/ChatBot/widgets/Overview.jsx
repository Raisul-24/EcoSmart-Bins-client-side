import Options from "./Options";

const Overview = (props) => {
  const options = [
    {
      name: "What is EcoSmartBin",
      handler: props.actionProvider.handleMedicine,
      id: 1,
    },
    {
      name: "What is PickUp Request",
      handler: props.actionProvider.handleLocalStats,
      id: 2,
    },
    {
      name: "How to contact",
      handler: props.actionProvider.handleContact,
      id: 3,
    },
    {
      name: "What service we provite",
      handler: props.actionProvider.handleGlobalStats,
      id: 4,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Overview;

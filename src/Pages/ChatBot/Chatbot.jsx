//import { useState, useEffect } from "react";
//import PropTypes from "prop-types";
//import ChatBot, { Loading } from "react-simple-chatbot";

//const DBPedia = (props) => {
//  const [loading, setLoading] = useState(true);
//  const [result, setResult] = useState("");
//  const [trigger, setTrigger] = useState(false);
//
//  //  const triggerNextStep = () => {};
//
//  const fetchData = () => {
//    const { steps } = props;
//    const search = steps.search.value;
//    const endpoint = encodeURI("https://dbpedia.org");
//    const query = encodeURI(`
//      select * where {
//      ?x rdfs:label "${search}"@en .
//      ?x rdfs:comment ?comment .
//      FILTER (lang(?comment) = 'en')
//      } LIMIT 100
//    `);
//
//    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;
//
//    fetch(queryUrl)
//      .then((response) => response.json())
//      .then((data) => {
//        const bindings = data.results.bindings;
//        if (bindings && bindings.length > 0) {
//          setResult(bindings[0].comment.value);
//        } else {
//          setResult("Not found.");
//        }
//      })
//      .catch((error) => {
//        console.error("Error fetching data:", error);
//        setResult("Error fetching data.");
//      })
//      .finally(() => {
//        setLoading(false);
//      });
//  };
//
//  const triggetNext = () => {
//    setTrigger(true);
//    props.triggerNextStep();
//  };
//
//  useEffect(() => {
//    fetchData();
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, []); // Run once when component mounts
//
//  return (
//    <div className="dbpedia">
//      {loading ? <Loading /> : result}
//      {!loading && (
//        <div
//          style={{
//            textAlign: "center",
//            marginTop: 20,
//          }}
//        >
//          {!trigger && <button onClick={triggetNext}>Search Again</button>}
//        </div>
//      )}
//    </div>
//  );
//};
//
//DBPedia.propTypes = {
//  steps:  object,
//  triggerNextStep: PropTypes.func,
//};
//
//DBPedia.defaultProps = {
//  steps: undefined,
//  triggerNextStep: undefined,
//};

import { useState } from "react";
import ChatBot, { Loading } from "react-simple-chatbot";

const Chatbot = () => {
  const [steps, setSteps] = useState([
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
  ]);

  const preventRepeatMessage = (triggerId) => {
    return ({ previousValue, steps }) => {
      const hasTriggered = steps.find(
        (step) => step.id === triggerId && step.triggered
      );
      if (hasTriggered) {
        return "issues";
      }
      return triggerId;
    };
  };

  steps.find((step) => step.id === "React").trigger = preventRepeatMessage(
    "React"
  );
  steps.find((step) => step.id === "Angular").trigger = preventRepeatMessage(
    "Angular"
  );

  return (
    <div>
      <ChatBot
        steps={steps}
        handleEnd={(values) => {
          // Add custom logic when the chat ends if needed
        }}
      />
    </div>
  );
};

export default Chatbot;

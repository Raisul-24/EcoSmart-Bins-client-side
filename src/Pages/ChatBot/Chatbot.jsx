import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChatBot, { Loading } from "react-simple-chatbot";

const DBPedia = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const [trigger, setTrigger] = useState(false);

  //  const triggerNextStep = () => {};

  const fetchData = () => {
    const { steps } = props;
    const search = steps.search.value;
    const endpoint = encodeURI("https://dbpedia.org");
    const query = encodeURI(`
      select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;

    fetch(queryUrl)
      .then((response) => response.json())
      .then((data) => {
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          setResult(bindings[0].comment.value);
        } else {
          setResult("Not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResult("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const triggetNext = () => {
    setTrigger(true);
    props.triggerNextStep();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once when component mounts

  return (
    <div className="dbpedia">
      {loading ? <Loading /> : result}
      {!loading && (
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          {!trigger && <button onClick={triggetNext}>Search Again</button>}
        </div>
      )}
    </div>
  );
};

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const ExampleDBPedia = () => (
  <ChatBot
    steps={[
      {
        id: "1",
        message: "Type something to search on Wikipédia. (Ex.: Brazil)",
        trigger: "search",
      },
      {
        id: "search",
        user: true,
        trigger: "3",
      },
      {
        id: "3",
        component: <DBPedia />,
        waitAction: true,
        trigger: "displayResult",
      },
      {
        id: "displayResult",
        message: "Here is the result:",
        trigger: "4",
      },
      {
        id: "4",
        component: (
          <div>
            <p>{`{{previousValue}}`}</p> {/* This will display the result */}
            <button onClick={() => triggerNextStep()}>Search Again</button>
          </div>
        ),
        asMessage: true,
      },
    ]}
  />
);

export default ExampleDBPedia;

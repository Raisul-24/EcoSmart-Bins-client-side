import axios from "axios";

const Chatbot = ({ show }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    axios.post("/messages", text).then((res)=>console.log(res.data))
  };
  return (
    <div className={`fixed ${show ? "right-24" : "right-full"} z-20 bottom-20`}>
      {/* <div className="artboard bg-green-300 rounded-xl phone-1">320×568</div> */}
      <form onSubmit={handleSubmit}>
        <input name="text" className="input input-primary" type="text" />
        <button className="btn btn-primary">submin</button>
      </form>
    </div>
  );
};

export default Chatbot;

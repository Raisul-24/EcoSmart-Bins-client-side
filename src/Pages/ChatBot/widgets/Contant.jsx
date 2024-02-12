import UrlIcon from "../icons/call.svg";

const Contact = () => {
  return (
    <a href="tel:1999" className="tel-link">
      <img className="url-icon" alt="CallIcon" src={UrlIcon} />
      <h1 className="tel-header"> Call 01999999999 </h1>
    </a>
  );
};

export default Contact;

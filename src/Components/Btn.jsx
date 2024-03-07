const Btn = ({ children, className = "",onClick }) => {
  return (
    <button onClick={onClick} className={`btnStyle ${className}`}>
      <span>{children}</span>
    </button>
  );
};

export default Btn;

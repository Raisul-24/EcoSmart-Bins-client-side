
const Btn = ({children,className=""}) => {
    return (
        <button className={`btnStyle ${className}`}>
          <span>{children}</span>
        </button>
    );
};

export default Btn;
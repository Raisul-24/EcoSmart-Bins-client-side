import { Link } from "react-router-dom";
const ServiceFooter = ({ data }) => {
  //  //console.log(data);
  return (
    <div className="overflow-hidden ">
      <Link
        className="group relative cursor-pointer "
        to={`/services/${data?._id}`}
      >
        {data?.category}

        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-color origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
      </Link>
    </div>
  );
};

export default ServiceFooter;

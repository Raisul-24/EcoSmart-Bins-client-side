import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const TeamCard = ({ team }) => {
  //  console.log(team);
  const { name, img_url, role, github, linkedin, facebook } = team || {};
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white flex justify-center  object-center h-60">
        <img
          src={img_url}
          alt="avatar"
          className=" h-[200px] w-[200px] rounded-full  object-cover "
        />
      </div>
      <div className="p-2 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block  text-lime-700 antialiased font-medium leading-relaxed  ">
          {role}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7 mb-6">
        <Link to={facebook} className="bg-black p-2 rounded-full">
          <span className="text-lg text-white ">
            <FaFacebookF />
          </span>
        </Link>
        <Link to={github} className="bg-black p-2 rounded-full">
          <span className="text-lg text-white ">
            <FaGithub />
          </span>
        </Link>
        <Link to={linkedin} className="bg-black p-2 rounded-full">
          <span className="text-lg text-white ">
            <FaLinkedin />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;

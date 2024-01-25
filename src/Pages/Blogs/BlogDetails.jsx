import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  const [sameId, setSameId] = useState({});

  useEffect(() => {
    const findData = details.find((detail) => detail.id == idInt);
    setSameId(findData);
  }, [details, idInt]);

  const { shortName, shortDescription, image, description } = sameId || {};

  console.log(sameId);

  return (
    <div>
      <div className=" ">
        <h4 className="text-5xl font-bold bg-[#f4f4f4] text-center py-8 text-[#001335]">
          Blog Details
        </h4>

        <div className="md:min-h-full">
          <div className="">
            <img
              data-aos="zoom-out"
              className="md:h-[650px] container mx-auto rounded-xl"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 mb-20 flex flex-col gap-5 justify-center items-start">
        <h3 className="text-4xl font-bold text-[#000000]">{shortName}</h3>
        <p className="text-[#370000]">
          {shortDescription} {description}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;

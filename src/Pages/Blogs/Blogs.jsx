import { useState } from "react";
import BlogCard from "./BlogCard";
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import ShopSearch from "../Shop/ShopSearch";
import ShopCategorie from "../Shop/ShopCategorie";
import banner from "../../assets/BannerImages/BlogBanner.jpg";
import { motion } from 'framer-motion';
import img1 from "../../assets/images/shape-4.png"
import img2 from "../../assets/images/shape-5.png"

const Blog = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const {
    data: blogs,
    isLoading: loading,
    refetch,
  } = useGetApiQuery(`/blogs?search=${search}&category=${category}`);
  const { data, isLoading } = useGetApiQuery("/blogsCategory");
  const handelSubmit = (e) => {
    e.preventDefault();
    const searchData = e.target.search.value;
    setSearch(searchData);
    refetch();
  };
  return (
    <div className="font-andika">
      <div
        className="hero h-96 relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div
          
          >
            <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
            <motion.div
          className="lg:bottom-10 lg:left-20 bottom-5 left-5 absolute hidden md:block "
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        >
          <motion.img
            src={img1}
            alt="Zooming Image"
            className="w-24 lg:w-32"
          />
        </motion.div>
            <div className="hero-content text-center text-neutral-content relative z-10">
              <div className="max-w-md text-white">
                <h1 className="mb-5 text-5xl font-bold">Discover Our Blog</h1>
                <p className="mb-5">
                  Explore Insights, Tips, and Inspiration for Sustainable Living
                </p>
              </div>
            </div>
            <motion.div
          className="absolute top-5 right-5 lg:top-20 lg:right-40 hidden md:block"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          originX={0.5}
          originY={0.5}
        >
          <motion.img
            src={img2}
            alt="Rotating Image"
            className="w-24 h-24"
          />
        </motion.div>
          </div>
        </div>
      </div>
      <div className=" mx-8 mt-20">
        <h5 className="text-2xl text-green-600 font-semibold text-center pb-5">
          Our Articles
        </h5>
        <h3 className="text-5xl font-bold text-[#000000] text-center mb-20">
          Get more updates from Eco-Smart Bins
        </h3>
        {loading || isLoading ? (
          <div className="text-center">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="md:grid grid-cols-9 gap-20 items-start justify-center">
            <div className=" mb-5 col-span-6">
              {blogs?.map((blog) => (
                <BlogCard key={blog?._id} blog={blog}></BlogCard>
              ))}
            </div>
            <div className="lg:col-span-3 col-span-12 mt-20 lg:order-last order-first">
              {/* search input field */}
              <ShopSearch handelSubmit={handelSubmit} />
              {/* categories buttons part */}
              <div className="py-10 px-7 flex flex-col justify-center bg-[#e9f1ea] mt-4">
                <ShopCategorie
                  data={"all blogs"}
                  setCategory={setCategory}
                  isTrue={true}
                />
                {data?.map((item, idx) => (
                  <ShopCategorie
                    data={item}
                    key={idx}
                    setCategory={setCategory}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

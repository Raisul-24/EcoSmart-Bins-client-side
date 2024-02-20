import Swal from "sweetalert2";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    console.log(email);

    if (handleSubscribe) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="font-andika">
      <div
        className="z-0 relative md:px-10 py-5 lg:py-0"
        style={{
          backgroundImage: "url(https://i.ibb.co/vdg30h5/shape-27.png)",
        }}
      >
        <div>
          <div className="absolute h-32 -top-0  z-20">
            <img src={`https://i.ibb.co/HBkBJQk/shape-28.png`} alt="" />
          </div>
        </div>
        <div className="lg:h-96 px-5 md:px-0 pt-10 flex justify-between md:gap-10 items-center flex-col md:flex-row">
          <div className="text-center flex-1 lg:flex-none pt-10">
            {/* <div className="">
                <img src={`https://i.ibb.co/3s7Yjt7/shape-2.png`} alt="" />
            </div> */}
            <h1 className="text-3xl lg:text-5xl font-bold">Subscribe Now</h1>
            <p className="py-4 text-lg lg:text-xl">
              Do not miss. Get our latest news & update regularly
            </p>
          </div>
          <div className="lg:flex-1 rounded  border bg-[rgba(156,219,135,0.2)]    ">
            <form
              onSubmit={handleSubscribe}
              className="card-body outline-none  items-center flex-row gap-0"
            >
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input focus:outline-none focus:border-none  w-full lg:py-9 rounded-r-none text-black bg-white"
                  required
                />
              </div>
              <div className=" ">
                <button className="lg:h-[73px] btnStyle">
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

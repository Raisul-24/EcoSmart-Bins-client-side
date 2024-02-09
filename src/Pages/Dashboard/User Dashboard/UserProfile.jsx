const UserProfile = () => {
  return (
    <div>
      <div>
        <div>
          <div className="font-montserrat card md:w-96 items-center mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="">
                <img
                  className="w-40 h-40 rounded-full border-4 border-brand-color"
                  src="https://i.ibb.co/8X8stTp/user.webp"
                />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">displayName</h2>
              <p className="text-xl text-gray-500 font-bold mb-5">email</p>
              <div className="card-actions">
                <button className="btn bg-gradient-to-r from-brand-color to-green-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color text-white">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

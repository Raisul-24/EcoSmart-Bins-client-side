import GetData from "../../Hooks/GetDataHook";

const FAQ = () => {
  const [data, dataLoaing] = GetData("./FAQ.json");
  return (
    <div className="max-w-6xl mx-auto xl:px-0 px-5">
      <div className="flex justify-center">
        <h3 className="w-fit pt-5 pb-2 text-4xl border-b-4 border-[#3A9E1E] mb-10 font-semibold text-[#101a30]">
          FAQ
        </h3>
      </div>
      {dataLoaing ? (
        <div className="text-center">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 sm:grid-cols-1">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="collapse collapse-plus bg-[#3A9E1E] text-white"
            >
              <input type="radio" name="accordion" />
              <div className="collapse-title text-xl font-medium">
                {item?.qus}
              </div>
              <div className="collapse-content">
                <p>{item?.ans}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;

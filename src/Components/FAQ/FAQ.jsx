import GetData from "../../Hooks/GetDataHook";

const FAQ = () => {
  const [data, dataLoaing] = GetData("./FAQ.json");
  return (
    <div className="px-5 mb-20">
      <div className="flex justify-center">
        <h3 className="w-fit pt-5 pb-2 text-4xl border-b-4 border-brand-color mb-10 font-semibold text-[#101a30]">
          FAQ
        </h3>
      </div>
      {dataLoaing ? (
        <div className="text-center">
          <span className="loading bg-brand-color loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 sm:grid-cols-1">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="collapse collapse-plus bg-brand-color text-white"
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

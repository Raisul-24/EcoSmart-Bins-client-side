import GetData from "../../Hooks/GetDataHook";

const FAQ = () => {
  const [data, dataLoaing] = GetData("./FAQ.json");
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5 mb-20">
      <h2 className="text-center pt-5 lg:mt-20 text-4xl font-bold  text-[#101a30] mb-5">FAQ</h2>
        <p className="text-xl text-center text-brand-color font-semibold mb-10 capitalize lg:mb-20">frequently asked questions</p>
      {dataLoaing ? (
        <div className="text-center">
          <span className="loading bg-brand-color loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 sm:grid-cols-1">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="collapse collapse-plus border border-brand-color text-[#101a30]"
            >
              <input type="checkbox" name="accordion" />
              <div className="collapse-title  text-xl font-medium">
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

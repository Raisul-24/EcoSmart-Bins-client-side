const OverviewItem = ({ data }) => {
  return (
    <div className="border border-brand-color flex flex-col items-center p-6 rounded-xl">
      <h3 className="text-2xl font-bold capitalize">total {data?.name}:</h3>
      <p className="text-2xl font-semibold text-brand-color">{data?.total}</p>
    </div>
  );
};

export default OverviewItem;

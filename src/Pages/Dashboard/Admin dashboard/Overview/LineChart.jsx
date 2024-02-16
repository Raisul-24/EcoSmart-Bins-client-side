import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const Linechart = () => {
  const data = [
    { name: "December", uv: 0, pv: 400, amt: 400 },
    { name: "January", uv: 100, pv: 400, amt: 400 },
    { name: "February", uv: 300, pv: 400, amt: 400 },
  ];
  return (
    <div className="flex items-center md:col-span-2 col-span-1">
      <LineChart
        width={600}
        className="!w-full col-span-2"
        height={300}
        data={data}
      >
        <Line type="monotone" dataKey="uv" stroke="#3A9E1E" />
        <CartesianGrid stroke="#3A9E1E90" />
        <XAxis dataKey="name" />
        <YAxis dataKey="amt" />
      </LineChart>
    </div>
  );
};

export default Linechart;

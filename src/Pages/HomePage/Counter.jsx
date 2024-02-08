

import CountUp from "react-countup";
import { FaIndustry, FaTruckMoving, FaUsers } from "react-icons/fa";


const Counter = () => {

    return (

        <div className="mb-28">
            <div className="bg-brand-color p-10 my-10 md:flex md:justify-center">
                
                <div className="flex gap-7 border-b-2 md:border-b-0 md:border-r-2 lg:py-10 lg:px-16 py-5 px-8">
                    <div > <FaUsers className="text-5xl lg:text-7xl text-white font-bold"></FaUsers></div>
                    <div>
                        <h1 className="lg:text-5xl text-4xl text-white font-bold md:text-center">
                            <CountUp start={0} end={120} duration={2} delay={0} />+
                        </h1>
                        <p className=" lg:text-2xl text-white mt-5 md:text-center">Total Employees</p>
                    </div>
                </div>
                <div className="flex gap-7 md:border-r-2 border-b-2 md:border-b-0 lg:py-10 lg:px-16 py-5 px-8">
                   
                    <div > <FaIndustry className="text-5xl lg:text-7xl text-white font-bold"></FaIndustry></div>
                    <div></div>
                    <div>
                        <h1 className="lg:text-5xl text-4xl text-white font-bold md:text-center">
                            <CountUp start={0} end={80} duration={2} delay={0} />+
                        </h1>
                        <p className=" lg:text-2xl text-white mt-5 md:text-center">Total Industries Served</p>
                    </div>
                </div>
                <div className="flex gap-7  lg:py-10 lg:px-16 py-5 px-8">
                    <div > <FaTruckMoving className="text-5xl lg:text-7xl text-white font-bold"></FaTruckMoving></div>
                    <div>
                        <h1 className="lg:text-5xl text-4xl text-white font-bold md:md:text-center">
                            <CountUp start={0} end={2000} duration={2} delay={0} />+
                        </h1>
                        <p className=" lg:text-2xl text-white mt-5 md:md:text-center">Waste Picked & Dispose</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
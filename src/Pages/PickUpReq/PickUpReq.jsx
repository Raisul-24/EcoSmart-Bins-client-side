import Cover from "../../SharedComponents/Cover/Cover";
import pickUpCoverImg from "../../assets/images/ptitle-9-1.webp";


const PickUpReq = () => {
    return (
        <div>
            <Cover
        img={pickUpCoverImg}
        title="Request Pickup"
        subHeading="Streamline Waste Pickup Requests for Effortless Management and Environmental Responsibility."
      ></Cover>
            
        </div>
    );
};

export default PickUpReq;
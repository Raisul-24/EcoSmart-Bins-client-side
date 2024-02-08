import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Cover from "../../SharedComponents/Cover/Cover";
import pickUpCoverImg from "../../assets/images/ptitle-9-1.webp";
import PickUpForm from "./PickUpForm";


const PickUpReq = () => {
    return (
        <div>
            <Cover
        img={pickUpCoverImg}
        title="Request Pickup"
        subHeading="Streamline Waste Pickup Requests for Effortless Management and Environmental Responsibility."
      ></Cover>
      <SectionTitle heading="Request Pickup"
        subHeading="24 Hour"> 
      </SectionTitle>
            <PickUpForm/>
            
        </div>
    );
};

export default PickUpReq;
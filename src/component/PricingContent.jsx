import { MdOutlineMan, MdOutlineSupervisorAccount } from "react-icons/md";
import HoverContent from "../service/HoverContent";

const PricingContent = ({ childrenH2, childrenP, iconName }) => {
  return (
    <div className="shadow w-auto inline-block absolute top-14 left-80">
      <HoverContent
        childrenH2={"For Enterprise"}
        childrenP={"Tailored for your team"}
        iconName={<MdOutlineSupervisorAccount size={"40px"} />}
      />
      <HoverContent
        childrenH2={"For individual"}
        childrenP={"Learn new technologies"}
        iconName={<MdOutlineMan size={"40px"} />}
      />
    </div>
  );
};

export default PricingContent;

import { MdMan, MdSupervisedUserCircle } from "react-icons/md";
import HoverContent from "../service/HoverContent";

const PricingContent = ({ childrenH2, childrenP, iconName }) => {
  return (
    <div className="shadow w-auto inline-block">
      <HoverContent
        childrenH2={"For Enterprise"}
        childrenP={"Tailored for your team"}
        iconName={<MdSupervisedUserCircle size={"40px"} />}
      />
      <HoverContent
        childrenH2={"For individual"}
        childrenP={"Learn new technologies"}
        iconName={<MdMan size={"40px"} />}
      />
    </div>
  );
};

export default PricingContent;

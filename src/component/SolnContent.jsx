import { MdArrowForwardIos, MdSupervisedUserCircle } from "react-icons/md";
import HoverContent from "../service/HoverContent";

const SolutionsContent = ({ childrenH2, childrenP, iconName }) => {
  return (
    <div className="shadow w-auto inline-block absolute top-14 left-32">
      <HoverContent
        childrenH2={"Educative Enterprise"}
        childrenP={"Enablement platform"}
        iconName={<MdSupervisedUserCircle size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Developers"}
        childrenP={"Learn new technologies"}
        iconName={<MdArrowForwardIos size={"40px"} />}
      />
    </div>
  );
};

export default SolutionsContent;

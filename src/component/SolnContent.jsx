import { MdArrowForwardIos, MdSupervisedUserCircle } from "react-icons/md";
import HoverContent from "../service/HoverContent";

const SolutionsContent = ({ childrenH2, childrenP }) => {
  return (
    <div className="shadow p-3 w-auto inline-block">
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

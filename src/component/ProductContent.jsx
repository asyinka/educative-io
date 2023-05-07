import { Fragment } from "react";
import HoverContent from "../service/HoverContent";
import {
  MdArrowForwardIos,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";

const ProductContent = ({ childrenH2, childrenP }) => {
  return (
    <Fragment className="shadow">
      <HoverContent
        childrenH2={"Educative Enterprise"}
        childrenP={"Enablement platform"}
        iconName={<MdOutlineSupervisedUserCircle size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Developers"}
        childrenP={"Learn new technologies"}
        iconName={<MdArrowForwardIos size={"40px"} />}
      />
    </Fragment>
  );
};

export default ProductContent;

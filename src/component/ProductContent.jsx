import { Fragment } from "react";
import HoverContent from "../service/HoverContent";
import {
  MdCatchingPokemon,
  MdDoorFront,
  MdFormatQuote,
  MdLibraryBooks,
  MdOutlineArrowCircleDown,
  MdOutlineSupervisedUserCircle,
  MdTabletAndroid,
} from "react-icons/md";

const ProductContent = ({ childrenH2, childrenP, iconName }) => {
  return (
    <div className="shadow w-auto inline-block absolute top-14 left-56">
      <HoverContent
        childrenH2={"Courses for Enterprise"}
        childrenP={"Supercharge your engineering team"}
        iconName={<MdOutlineSupervisedUserCircle size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Courses for Individuals"}
        childrenP={"World class course"}
        iconName={<MdTabletAndroid size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Onboarding"}
        childrenP={"Onboard new hires faster"}
        iconName={<MdDoorFront size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Assesment"}
        childrenP={"Measure your SkillScore"}
        iconName={<MdOutlineArrowCircleDown size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Personalized Paths"}
        childrenP={"Personalized Paths for your goals"}
        iconName={<MdLibraryBooks size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Projects"}
        childrenP={"Build real world applications"}
        iconName={<MdCatchingPokemon size={"40px"} />}
      />
      <HoverContent
        childrenH2={"Answers"}
        childrenP={"Trusted Answers to Developer Questions"}
        iconName={<MdFormatQuote size={"40px"} />}
      />
    </div>
  );
};

export default ProductContent;

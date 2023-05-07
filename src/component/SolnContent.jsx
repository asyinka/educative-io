import { MdArrowForwardIos, MdSupervisedUserCircle } from "react-icons/md";

const SolutionsContent = () => {
  return (
    <div className="w-60 shadow p-3">
      <div className="flex hover:bg-gray-100 group cursor-pointer py-2">
        <div className="mx-2 group-hover:text-blue-400 bg-gray-100">
          <MdSupervisedUserCircle size={"40px"} />
        </div>
        <div>
          <h2 className="font-bold">Educative Enterprise</h2>
          <p className="text-gray-600 text-xs font-medium">
            Enablement platform
          </p>
        </div>
      </div>

      <div className="flex group hover:bg-gray-100 hover:first-child:text-blue-400 cursor-pointer py-2">
        <div className="mx-2 group-hover:text-blue-400 bg-gray-100">
          <MdArrowForwardIos size={"40px"} />
        </div>
        <div>
          <h2 className="font-bold">Developers</h2>
          <p className="text-gray-600 text-xs font-medium">
            Learn new technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsContent;

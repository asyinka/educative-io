import {
  MdAddchart,
  MdArrowRight,
  MdArrowRightAlt,
  MdSearch,
} from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex justify-between font-bold text-gray-800">
      <div className="flex py-4">
        <div className="mr-4">
          <a href="#" className="flex">
            <MdAddchart size={"32px"} color={"blue"} /> educative
          </a>
        </div>
        <div className="wrapper ">
          <span className="py-6 px-4 hover:bg-gray-100">Solutions</span>
          <span className="py-6 px-4 hover:bg-gray-100">Products</span>
          <span className="py-6 px-4 hover:bg-gray-100">Pricing</span>
        </div>
      </div>

      <div className="flex">
        <a href="#" className="flex py-4 px-2">
          <MdSearch size={"24px"} /> <p className="ml-3">Search</p>
        </a>

        <div className="h-10 w-0.5 m-3 bg-gray-600 "></div>

        <a className="py-4 px-3" href="">
          Log in
        </a>

        <button className="flex px-4 py-2 my-2 mx-3 bg-blue-500 font-bold text-white outline-none rounded-md hover:bg-blue-800 ">
          Join for free <MdArrowRightAlt size={"30px"} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;

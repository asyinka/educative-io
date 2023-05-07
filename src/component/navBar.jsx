import { MdAddchart, MdArrowRight, MdSearch } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex-col bg-red-600">
      <div>
        <div className="">
          <MdAddchart /> educative
        </div>
        <div className="wrapper">
          <span>Solutions</span>
          <span>Products</span>
          <span>Pricing</span>
        </div>
      </div>
      <div>
        <div className="">
          <MdSearch /> Search
        </div>
        <div></div>
        <div className="">
          <a href="">
            <span>Solutions</span>
          </a>
          <a href="">
            <button>
              Join for free <MdArrowRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

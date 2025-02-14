import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" text-black fixed top-0 left-0 w-full bg-transparent py-4 px-8 flex justify-between items-center z-50">
        <Link to="/" className="text-3xl cursor-pointer font-bold">
          Placement-Portal
        </Link>
        <ul className="text-2xl  flex space-x-7">
          <li>
            <Link to="/" className="hover:text-gray-700 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-700 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700 hover:underline">
              Jobs
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <button className="btn btn-outline rounded-xl">Login</button>
          <button className="btn btn-soft rounded-xl">Signup</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

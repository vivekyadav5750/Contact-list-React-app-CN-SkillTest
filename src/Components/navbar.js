import { NavLink } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <nav className="h-20 bg-gray-200 flex px-4 items-center justify-between font-mono pb-4  ">
        <NavLink to="/" className="flex ">

        <h1 className="text-2xl text-customPurple font ml-12 cursor-pointer flex space-x-2">
          <RiContactsBookFill size={24} className="text-orange-600 " />
          <span className="text-xl text-customPurple"> Contact Manager</span>
        </h1>

        </NavLink>

        <ul className="flex space-x-8 font-semibold mr-14">
          <NavLink to="/newContact">
          <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
            <IoIosContact  size={24} className="text-orange-600 " />
            <span className="text-xl text-customPurple"> Add Contact</span>
          </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

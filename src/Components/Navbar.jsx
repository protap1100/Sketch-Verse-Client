import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvier";
import { FaAlignJustify } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log("logout done", res);
      })
      .catch((error) => {
        console.log("failed", error);
      });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar font-Poppins bg-gradient-to-r from-blue-300 to-blue-800 text-white p-4 rounded-xl shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <FaAlignJustify className="text-2xl" />
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52"
              >
                <DropdownRoute to="/" label="Home" />
                <DropdownRoute to="/allPaint" label="All Paint" />
                <DropdownRoute to="/addPaint" label="Add Paint" />
                <DropdownRoute to="/myPaint" label="My Paint" />
                <DropdownRoute to="/categoryPaint" label="Category" />
                <DropdownRoute to="/contact" label="Contact" />
              </ul>
            )}
          </div>
          <Link to="/" className="text-2xl font-bold">
            Sketch Verse
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            <NavItem to="/" label="Home" />
            <NavItem to="/allPaint" label="All Paint" />
            <NavItem to="/addPaint" label="Add Paint" />
            <NavItem to="/myPaint" label="My Paint" />
            <NavItem to="/categoryPaint" label="Category" />
            <NavItem to="/contact" label="Contact" />
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <UserProfile user={user} />
          <DropdownMenu user={user} handleSignOut={handleSignOut} />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-white text-lg rounded-lg py-2 px-4 ${
        isActive ? "bg-blue-500 border-b border-white" : "hover:bg-blue-400"
      }`
    }
  >
    {label}
  </NavLink>
);

const DropdownRoute = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block text-blue-700 rounded-lg py-2 px-4 ${
        isActive ? "bg-blue-200 " : "hover:bg-blue-100 "
      }`
    }
  >
    {label}
  </NavLink>
);

const UserProfile = ({ user }) => (
  <div
    className="w-10 rounded-full tooltip"
    data-tooltip-id="my-tooltip"
    data-tooltip-content={user?.displayName || "No Username Available"}
  >
    {user ? (
      <img
        className="rounded-full"
        src={user.photoURL || "No Photo Url"}
        alt="User Profile"
      />
    ) : (
      ""
    )}
    <Tooltip id="my-tooltip" />
  </div>
);

const DropdownMenu = ({ user, handleSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
      >
        <FaAlignJustify />
      </button>
      {isOpen && (
        <div className="absolute mt-1 right-0 bg-white shadow-md rounded-md w-40">
          <div className="py-1">
            {user ? (
              <>
                <Link
                  to="/updateProfile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={toggleDropdown}
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

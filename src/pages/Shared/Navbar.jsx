import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const Navbar = ({ darkMode, toggleTheme }) => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { logOut, user } = useAuth();
  const textStrokeStyle = {
    WebkitTextStroke: "0.5px white",
    textStroke: "0.5px white",
    color: "transparent",
  };

  const links = (
    <>
      <li
        className={`border-b-2 border-b-transparent hover:border-b-white duration-200 rounded-[4px] px-1 ${
          path === "/" && "font-semibold"
        }`}
      >
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li
        className={`border-b-2 border-b-transparent hover:border-b-white duration-200 rounded-[4px] px-1 ${
          path === "/need-volunteers" && "font-semibold"
        }`}
      >
        <NavLink to={"/need-volunteers"}>Need Volunteers</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-primary py-5 shadow-none">
      <div className="navbar container mx-auto px-2 md:px-4 shadow-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 z-[50] p-2 shadow bg-background border-primary border text-text w-52"
            >
              {links}
            </ul>
          </div>
          <h1
            className="selection:none text-xl md:text-3xl lg:text-5xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Hands<span style={textStrokeStyle}>ON</span>
          </h1>
          <button
            onClick={() => toggleTheme()}
            className="btn ml-4 btn-circle bg-transparent border-none text-2xl hover:border-none hover:bg-white"
          >
            {darkMode ? (
              <>
                <MdSunny className="text-3xl text-yellow-500"></MdSunny>
              </>
            ) : (
              <>
                <FaMoon className="text-gray-800"></FaMoon>
              </>
            )}
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center gap-5 text-white px-1 text-lg font-light">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="tooltip flex justify-center items-center  rounded-full tooltip-left btn btn-circle"
                    data-tip={user.displayName}
                  >
                    <div className="w-12 rounded-full">
                      <img
                        className="rounded-full object-cover aspect-square"
                        src={user.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content mt-2 z-[50] p-2 shadow bg-background border-primary border text-text w-52 flex flex-col gap-y-1 font-bold"
                  >
                    <Link
                      to={"/manage-posts"}
                      className="btn bg-primary text-white hover:text-white hover:bg-primary border-none rounded-none w-full"
                    >
                      Manage My Posts
                    </Link>
                    <hr />
                    <Link
                      to={"/add-volunteer-post"}
                      className="btn bg-primary text-white hover:text-white hover:bg-primary border-none rounded-none w-full"
                    >
                      Add Volunteer Post
                    </Link>
                  </ul>
                </div>
                <button
                  className="btn bg-transparent hover:bg-white text-white hover:text-primary border-white hover:border-white rounded-none"
                  onClick={() => logOut()}
                >
                  SIGN OUT
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="btn bg-transparent hover:bg-white text-white hover:text-primary rounded-none border-white hover:border-white"
                onClick={() => navigate("/login")}
              >
                SIGN IN
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

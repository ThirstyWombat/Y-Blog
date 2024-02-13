import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
// const IS_LOGGED_IN = false;
//text-lg font-semibold leading-6 text-gray-900
export default function NavBar() {
  function renderLinks() {
    if (Auth.loggedIn()) {
      return (
        <>
          <NavLink to="/" className="px-4 hover:underline decoration-[#B8DEF4]">
            Home
          </NavLink>
          <NavLink
            to="/user"
            className="px-4 hover:underline decoration-[#B8DEF4]"
          >
            Profile
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/" className="px-4 hover:underline decoration-[#B8DEF4]">
          Home
        </NavLink>
        <NavLink
          to="/signup"
          className="px-4 hover:underline decoration-[#B8DEF4]"
        >
          Sign Up
        </NavLink>
      </>
    );
  }

  function renderLogin() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Link
            className="text-lg font-semibold leading-6 "
            onClick={() => Auth.logout()}
          >
            Logout <span aria-hidden="true">→</span>
          </Link>
        </div>
      );
    }
    return (
      <>
        <Link to="/login">
          Log in <span aria-hidden="true">→</span>
        </Link>
      </>
    );
  }
  return (
    <header className="flex flex-wrap space-x-1 space-y-1 justify-between mx-6 pb-6">
      <div>
        <Link to="/"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50px" height="50px" viewBox="0 0 107.000000 109.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,109.000000) scale(0.100000,-0.100000)"
fill="lightgray" stroke="none">
<path d="M913 969 c-18 -6 -93 -107 -93 -125 0 -2 -19 -30 -41 -61 -23 -30
-47 -65 -53 -77 -6 -11 -28 -46 -47 -76 -20 -30 -44 -68 -54 -84 l-18 -29 -18
24 c-10 13 -19 27 -19 31 0 3 -37 62 -82 131 -46 68 -89 133 -96 143 -6 10
-16 28 -21 39 -6 11 -20 32 -33 48 -23 27 -25 28 -145 31 -68 1 -123 -1 -123
-4 0 -7 108 -175 171 -268 16 -23 29 -45 29 -48 0 -3 11 -20 25 -38 14 -18 25
-36 25 -40 0 -4 19 -33 43 -64 l42 -57 0 -173 c0 -201 -11 -185 125 -180 l85
3 5 185 c5 183 5 186 33 225 62 90 297 450 297 457 0 13 -15 16 -37 7z m-620
-64 c9 -4 25 -25 37 -47 11 -22 55 -92 98 -155 42 -63 81 -122 87 -131 5 -10
20 -31 33 -49 22 -31 22 -39 20 -205 l-3 -173 -55 0 -55 0 0 155 c0 152 -1
156 -26 190 -15 19 -46 67 -69 105 -24 39 -45 72 -49 75 -4 3 -26 37 -51 75
-24 39 -57 87 -73 108 -41 53 -31 69 36 63 29 -3 61 -8 70 -11z"/>
</g>
</svg></Link>
      </div>

      <div className="">
        <nav className="mx-2">{renderLinks()}</nav>
      </div>
      <div className="">{renderLogin()}</div>
    </header>
  );
}

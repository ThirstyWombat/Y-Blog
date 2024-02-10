import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
// const IS_LOGGED_IN = false;
//text-lg font-semibold leading-6 text-gray-900
export default function TestNav() {
  function renderLinks() {
    if (Auth.loggedIn()) {
      return (
        <>
          <NavLink to="/" className="px-4">Home</NavLink>
          <NavLink to="/user" className="px-4">Profile</NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/" className="px-4">Home</NavLink>
        <NavLink to="/signup"className="px-4" >Sign Up</NavLink>
      </>
    );
  }

  function renderLogin() {
    if (Auth.loggedIn()) {
      return (
          <div>
          <Link
            className="text-lg font-semibold leading-6 text-gray-900"
            onClick={() => Auth.logout()}
          >
            Logout <span aria-hidden="true">→</span>
          </Link>
          </div>
      );
    }
    return (
      <>
        <Link
          to="/login"
        >
          Log in <span aria-hidden="true">→</span>
        </Link>
      </>
    );
  }
  return (
    <header className="flex flex-wrap space-x-1 space-y-1 justify-between mx-6 pb-6">
      <div className="text-4xl
    font-mono hover:underline decoration-[#B8DEF4]">
        <Link to="/">Y</Link>
      </div>

      <div className="">
        <nav className="mx-2">
          {renderLinks()}
        </nav>
      </div>
      <div className="">{renderLogin()}</div>
    </header>
  );
}

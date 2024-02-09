import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
// const IS_LOGGED_IN = false;
//text-lg font-semibold leading-6 text-gray-900
export default function TestNav() {
  function renderLinks() {
    if (Auth.loggedIn()) {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">Profile</NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  function renderLogin() {
    if (Auth.loggedIn()) {
      return (
        <>
          <div className="" onClick={() => Auth.logout()}>
            Logout <span aria-hidden="true">→</span>
          </div>
        </>
      );
    }
    return (
      <>
        <Link
          to="/login"
          className=""
        >
          Log in <span aria-hidden="true">→</span>
        </Link>
      </>
    );
  }
  return (
    <header className="flex flex-wrap space-x-1 space-y-1 justify-between mx-6">
      <div className="">
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

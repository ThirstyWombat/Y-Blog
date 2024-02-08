// import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
const IS_LOGGED_IN = true;
export default function TestNav() {
  function renderLinks() {
    if (IS_LOGGED_IN) {
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
    if (IS_LOGGED_IN) {
      return (
        <>
          <div className="text-lg font-semibold leading-6 text-gray-900">
            Logout <span aria-hidden="true">→</span>
          </div>
        </>
      );
    }
    return (
      <>
        <Link
          to="/login"
          className="text-lg font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">→</span>
        </Link>
      </>
    );
  }
  return (
    <header className="flex justify-between items-center w-full border-b z-20 p-8">
      <div className="flex items-center justify-center w-3/12">
        <Link to="/">Y</Link>
      </div>

      <div className=" flex-grow border border-solid border-black-500 w-6/12">
        <nav className="flex items-center justify-center space-x-10">
          {renderLinks()}
        </nav>
      </div>
      <div className="w-3/12  flex justify-end">{renderLogin()}</div>
    </header>
  );
}

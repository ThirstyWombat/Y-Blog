import { Link, NavLink } from "react-router-dom";
const IS_LOGGED_IN = false;
export default function TestNav() {
  function renderLinks() {
    if (IS_LOGGED_IN) {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink href="#">Profile</NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink href="/signup">Sign Up</NavLink>
      </>
    );
  }
  return (
    <header className="flex justify-between items-center w-full border-b z-20 p-8">
      <div className="flex items-center justify-center w-3/12">
        <Link to="/">Logo</Link>
      </div>

      <div className=" flex-grow border border-solid border-black-500 w-6/12">
        <nav className="flex items-center justify-center space-x-10">
          {/* <NavLink to="/">Home</NavLink>
          {IS_LOGGED_IN ? (
            <NavLink href="#">Profile</NavLink>
          ) : (
            <NavLink href="/signup">Sign Up</NavLink>
          )} */}
          {renderLinks()}
        </nav>
      </div>
      <div className="w-3/12  flex justify-end">
        <Link
          to="/login"
          className="text-lg font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}

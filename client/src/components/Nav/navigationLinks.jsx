import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";

function Navlinks() {
  if (Auth.loggedIn()) {
    return (
      <ul className="flex-row">
        <li
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          aria-current="page"
        >
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="flex-grow">
        <nav className="flex  h-full items-center justify-center">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup"> Sign up</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navlinks;

//   <ul className="flex justify-between">
//     <li
//       className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//       aria-current="page"
//     >
//       <Link to="/signup">Sign Up</Link>
//     </li>
//     <li
//       className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//       aria-current="page"
//     >
//       <Link to="/login">Login</Link>
//     </li>
//   </ul>

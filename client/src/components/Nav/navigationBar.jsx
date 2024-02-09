// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import NavLinks from "./navigationLinks";
function Nav() {
  return (
    <header className="flex justify-between items-center w-full border-2 border-rose-500 z-20 p-8">
      <div className="flex items-center justify-center">
        <Link to="/">Logo</Link>
      </div>

      <NavLinks />
    </header>
  );
}

export default Nav;

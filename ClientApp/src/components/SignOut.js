import { NavItem, NavLink } from "reactstrap";
import { logOut } from "../utils/logout";
import signedIn from "../utils/signedin";
const SignOut = () => {
  const userLogOut = () => {
    logOut();
  };

  return (
    <NavItem>
      <NavLink onClick={userLogOut} className="text-dark">
        Sign Out
      </NavLink>
    </NavItem>
  );
};
export default signedIn(SignOut);

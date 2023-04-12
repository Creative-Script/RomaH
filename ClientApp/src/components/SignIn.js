import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { isAuthorized } from '../utils/userTypes';

import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../modules/auth/maps";
const SignIn = ({onlogout}) => {
  return (
    <>
    {isAuthorized()?<NavItem>
      <NavLink onClick={onlogout} className="text-dark">
        Sign Out
      </NavLink>
    </NavItem>:<NavItem>
      <NavLink tag={Link} className="text-dark" to="/login">
        Login
      </NavLink>
    </NavItem>
    }
    </>
  );
};
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
// export default SignIn;
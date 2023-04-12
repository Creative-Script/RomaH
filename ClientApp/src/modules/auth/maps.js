import { logout } from "./actions/logout";
import { login } from "./store/actions";

export const mapStateToProps = (state) => ({
    authenticated: state.authentication.isLoggedIn,
    user: state.authentication.user,
  });
  
export const mapDispatchToProps = (dispatch) => ({
onLogin: (user) => dispatch(login(user)),
onLogout: () => {
    // localStorage.clear();
    dispatch(logout());},
});

import LoginForm from "./components/LoginForm";
import { useReducer } from "react";
import { loginUser } from "./lib/auth";
import { toast } from "react-toastify";
import { reducer } from "./store/reducer";
import { initialState } from "./store/initialState";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./maps";
import { isAuthorized } from "../../utils/userTypes";
// import { NavMenu } from '../../components/NavMenu';

export const Auth = ({ authenticated, user, onLogin }) => {
// const Auth = () => {
  const [state, authCall] = useReducer(reducer, initialState);

  const router = useNavigate();
  const handleSubmit = async (values) => {
    authCall({ type: "UserLoadingChange", payload: true });
    await loginUser(values)
      .then((res) => {
        toast.success("Successfully logged in");
        authCall({ type: "UserLoadingChange", payload: false });
        Object.keys(res.data).map((item) => {
          localStorage.setItem(item, res.data[item]);
        });
        onLogin(res.data);
        router("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to login user");
        toast.error(error.message);
        authCall({ type: "UserLoadingChange", payload: false });
      });
  };
  const { userdata, isLoading } = state;
  return (
    <>
      {isAuthorized() ? (
        <Navigate to="/" />
      ):(
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h6>Login</h6>
              <LoginForm
                user={userdata}
                handleSubmit={handleSubmit}
                isProcessing={isLoading}
              ></LoginForm>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      )
      }
    </>
  );
};
// export default Auth;
export default connect(mapStateToProps, mapDispatchToProps)(Auth);

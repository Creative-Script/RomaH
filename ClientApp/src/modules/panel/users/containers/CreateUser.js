import { useReducer } from "react";
import { toast } from "react-toastify";
import { reducer } from "../store/reducer";
import { initialState } from "../store/initialState";
import { useNavigate } from "react-router-dom";
import withAuth from "../../../../utils/admin";
import { createUser } from "../lib/users";
import UserForm from "../components/UserForm";

const Users = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const router = useNavigate();
  const handleSubmit = async (values) => {
    dispatch({ type: "UserLoadingChange", payload: true });
    await createUser(values)
      .then((res) => {
        toast.success("Successfully logged in");
        dispatch({ type: "UserLoadingChange", payload: false });

        router("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to login user");
        toast.error(error.message);
        dispatch({ type: "UserLoadingChange", payload: false });
      });
  };
  const { user, isLoading } = state;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <h6> User</h6>

          <UserForm
            handleSubmit={handleSubmit}
            isProcessing={isLoading}
          ></UserForm>
        </div>
      </div>
    </div>
  );
};
export default withAuth(Users);
